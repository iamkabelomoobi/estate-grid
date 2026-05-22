import { APIError, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma, UserRole } from "@estate-grid/db";
import { sendEmail, authenticationTemplates } from "@estate-grid/email";
import { logger } from "@estate-grid/logger";
import { createRoleRecord } from "../utils/create-role-record";

const appName = process.env.APP_NAME || "estate-grid";
const defaultFrontendUrl = "http://localhost:3000";

type AuthEmailTemplates = typeof authenticationTemplates & {
  emailChangeConfirmationTemplate: (params: {
    email: string;
    confirmationUrl: string;
    appName: string;
  }) => {
    to: string;
    subject: string;
    html: string;
    text: string;
  };
};

const authEmailTemplates = authenticationTemplates as AuthEmailTemplates;

const resolveFrontendUrl = (): string => {
  const configuredFrontendUrl = process.env.FRONTEND_URL?.trim();

  if (!configuredFrontendUrl) return defaultFrontendUrl;

  try {
    return new URL(configuredFrontendUrl).toString();
  } catch (error) {
    logger.warn("Invalid FRONTEND_URL configured for auth redirects", {
      error,
      frontendUrl: configuredFrontendUrl,
    });
    return defaultFrontendUrl;
  }
};

const resolveTrustedOrigins = (): string[] => {
  const configuredOrigins = [
    process.env.FRONTEND_URL,
    process.env.ADMIN_URL,
    process.env.AUTH_TRUSTED_ORIGINS,
    "http://localhost:3000",
    "http://127.0.0.1:4000",
    "http://localhost:4000",
  ]
    .flatMap((origin) => origin?.split(",") ?? [])
    .map((origin) => origin.trim())
    .filter((origin): origin is string => origin.length > 0);

  return Array.from(
    new Set(
      configuredOrigins.flatMap((origin) => {
        try {
          return [new URL(origin).origin];
        } catch (error) {
          logger.warn("Ignoring invalid trusted auth origin", {
            error,
            origin,
          });
          return [];
        }
      }),
    ),
  );
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  advanced: {
    disableCSRFCheck: process.env.NODE_ENV === "development",
    ipAddress: {
      ipv6Subnet: 64,
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationUrl = new URL(url);
        const callbackUrl = new URL(
          "/auth/verified",
          resolveFrontendUrl(),
        ).toString();

        verificationUrl.searchParams.set("callbackURL", callbackUrl);

        logger.debug(`Sending email verification to ${user.email}`);
        void sendEmail(
          authenticationTemplates.emailVerificationTemplate({
            email: user.email,
            verificationUrl: verificationUrl.toString(),
            appName,
          }),
        );
      } catch (error) {
        logger.error("Failed to send email verification", { error });
      }
    },
    afterEmailVerification: async (user, request) => {
      void sendEmail(
        authenticationTemplates.welcomeTemplate({
          email: user.email,
          name: user.name,
          appName,
        }),
      );
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    onExistingUserSignUp: async ({ user }, request) => {
      logger.warn(
        `User with email ${user.email} attempted to sign up but already exists. Consider implementing account recovery options.`,
      );
    },
    sendResetPassword: async ({ user, url }) => {
      try {
        logger.debug(`Sending reset password email to ${user.email}`);
        void sendEmail(
          authenticationTemplates.passwordResetLinkTemplate({
            email: user.email,
            resetUrl: url,
            appName,
          }),
        );
      } catch (error) {
        logger.error("Failed to send reset password email", { error });
      }
    },
    onPasswordReset: async ({ user }) => {
      try {
        logger.debug(`Sending password update email to ${user.email}`);
        void sendEmail(
          authenticationTemplates.passwordUpdateTemplate({
            email: user.email,
            name: user.name,
            appName,
          }),
        );
      } catch (error) {
        logger.error("Failed to send password update email", { error });
      }
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: UserRole.RENTER,
      },
    },
    changeEmail: {
      enabled: true,
      sendChangeEmailConfirmation: async ({ user, newEmail, url }) => {
        try {
          logger.debug(`Sending email change confirmation to ${newEmail}`);
          void sendEmail(
            authEmailTemplates.emailChangeConfirmationTemplate({
              email: newEmail,
              confirmationUrl: url,
              appName,
            }),
          );
        } catch (error) {
          logger.error("Failed to send email change confirmation", { error });
        }
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (user.role && user.role !== UserRole.RENTER) {
            logger.warn(
              `Attempt to assign privileged role "${user.role}" during signup for ${user.email}.`,
            );
            throw new APIError("FORBIDDEN", {
              message:
                "Assigning privileged roles during signup is not allowed. Please contact support if you believe this is an error.",
            });
          }
        },
        after: async (user) => {
          try {
            const safeRole = UserRole.RENTER;

            if (user.role !== safeRole) {
              logger.warn(
                `Rejected privileged signup role "${user.role}" for ${user.email}. Downgrading to RENTER.`,
              );
            }

            logger.info(
              `New user created: ${user.email} with role ${safeRole}`,
            );
            await createRoleRecord({
              id: user.id,
              role: safeRole,
            });
          } catch (error) {
            logger.error("Failed to post-process new user", { error });
          }
        },
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  trustedOrigins: [...resolveTrustedOrigins()],
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
