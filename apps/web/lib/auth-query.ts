"use client";

import {
  getSession,
  requestPasswordReset,
  resetPassword,
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from "@estate-grid/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { configureEstateGridSdk } from "@/lib/sdk";

export const authSessionQueryKey = ["auth", "session"] as const;

type SdkResponse<T> = {
  data: T;
  status: number;
};

type SdkErrorPayload = {
  error?: string;
  message?: string;
  statusText?: string;
};

type SignInInput = {
  callbackURL?: string;
  email: string;
  password: string;
  rememberMe?: boolean;
};

type SignUpInput = {
  callbackURL?: string;
  email: string;
  name: string;
  password: string;
};

type RequestPasswordResetInput = {
  email: string;
  redirectTo: string;
};

type ResetPasswordInput = {
  newPassword: string;
  token: string;
};

const authRequestOptions = {
  credentials: "include",
} satisfies RequestInit;

const getSdkErrorMessage = (payload: unknown, fallback: string): string => {
  if (payload && typeof payload === "object") {
    const errorPayload = payload as SdkErrorPayload;
    return (
      errorPayload.message ||
      errorPayload.statusText ||
      errorPayload.error ||
      fallback
    );
  }

  return fallback;
};

const requireSdkSuccess = <T>(
  response: SdkResponse<T>,
  fallback: string,
): T => {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(getSdkErrorMessage(response.data, fallback));
  }

  return response.data;
};

export const useAuthSessionQuery = () =>
  useQuery({
    queryFn: async () => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await getSession(authRequestOptions),
        "Could not load your session.",
      );
    },
    queryKey: authSessionQueryKey,
  });

export const useSignInMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: SignInInput) => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await signInWithEmail(
          {
            email,
            password,
          },
          authRequestOptions,
        ),
        "Could not sign you in.",
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: authSessionQueryKey });
    },
  });
};

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, name, password }: SignUpInput) => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await signUpWithEmail(
          {
            email,
            name,
            password,
          },
          authRequestOptions,
        ),
        "Could not create your account.",
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: authSessionQueryKey });
    },
  });
};

export const useRequestPasswordResetMutation = () =>
  useMutation({
    mutationFn: async ({ email, redirectTo }: RequestPasswordResetInput) => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await requestPasswordReset(
          {
            email,
            redirectTo,
          },
          authRequestOptions,
        ),
        "Could not send reset instructions.",
      );
    },
  });

export const useResetPasswordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ newPassword, token }: ResetPasswordInput) => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await resetPassword(
          {
            newPassword,
            token,
          },
          authRequestOptions,
        ),
        "Could not update your password.",
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: authSessionQueryKey });
    },
  });
};

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      configureEstateGridSdk();

      return requireSdkSuccess(
        await signOut(authRequestOptions),
        "Could not sign you out.",
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: authSessionQueryKey });
    },
  });
};
