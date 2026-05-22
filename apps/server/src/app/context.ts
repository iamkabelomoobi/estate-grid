import { auth, getBetterAuthHeaders } from "@estate-grid/auth";
import { prisma } from "@estate-grid/db";
import { UserRole } from "@estate-grid/db";
import { logger } from "@estate-grid/logger";
import { Request } from "express";

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string | null;
};

type Session = {
  user: SessionUser;
  session: {
    id: string;
    expiresAt: Date;
    token: string;
  };
};

const validUserRoles = new Set<UserRole>(Object.values(UserRole));

const toUserRole = (role: unknown): UserRole | null => {
  return validUserRoles.has(role as UserRole) ? (role as UserRole) : null;
};

export class Context {
  public readonly prisma: typeof prisma;
  public readonly session: Session | null;
  public readonly headers: Headers;
  public readonly ipAddress: string | null;

  private constructor(
    _prisma: typeof prisma,
    _session: Session | null,
    _headers: Headers,
    _ipAddress: string | null,
  ) {
    this.prisma = _prisma;
    this.session = _session;
    this.headers = _headers;
    this.ipAddress = _ipAddress;
  }

  get role(): UserRole | null {
    return toUserRole(this.session?.user?.role);
  }

  get isAuthenticated(): boolean {
    return this.session !== null;
  }

  get isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  get isAgent(): boolean {
    return this.role === UserRole.AGENT;
  }

  get isOwner(): boolean {
    return this.role === UserRole.OWNER;
  }

  get isBuyer(): boolean {
    return this.role === UserRole.BUYER;
  }

  get isRenter(): boolean {
    return this.role === UserRole.RENTER;
  }

  hasRole(...roles: UserRole[]): boolean {
    return (
      this.isAuthenticated && this.role !== null && roles.includes(this.role)
    );
  }

  assertAuth(): SessionUser {
    if (!this.session) {
      throw new Error("Unauthorized: you must be logged in");
    }
    return this.session.user;
  }

  assertAdmin(): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(UserRole.ADMIN)) {
      throw new Error("Forbidden: admin access required");
    }
    return user;
  }

  assertRenter(): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(UserRole.RENTER)) {
      throw new Error("Forbidden: renter access required");
    }
    return user;
  }

  assertAgent(): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(UserRole.AGENT)) {
      throw new Error("Forbidden: agent access required");
    }
    return user;
  }

  assertOwner(): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(UserRole.OWNER)) {
      throw new Error("Forbidden: owner access required");
    }
    return user;
  }

  assertBuyer(): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(UserRole.BUYER)) {
      throw new Error("Forbidden: buyer access required");
    }
    return user;
  }

  assertAnyRole(roles: UserRole[], message = "Forbidden"): SessionUser {
    const user = this.assertAuth();
    if (!this.hasRole(...roles)) {
      throw new Error(message);
    }
    return user;
  }

  static internal(): Context {
    return new Context(prisma, null, new Headers(), null);
  }

  static async fromRequest(req: Request): Promise<Context> {
    const forwardedForHeader = req.headers["x-forwarded-for"];
    const forwardedFor =
      typeof forwardedForHeader === "string"
        ? (forwardedForHeader.split(",")[0]?.trim() ?? null)
        : Array.isArray(forwardedForHeader)
          ? (forwardedForHeader[0]?.trim() ?? null)
          : null;
    const ipAddress = forwardedFor ?? req.ip ?? null;

    try {
      const headers = getBetterAuthHeaders(req.headers);
      const session = await auth.api.getSession({ headers });
      return new Context(prisma, session as Session | null, headers, ipAddress);
    } catch (error) {
      logger.warn("Failed to get session from request", { error });
      return new Context(prisma, null, new Headers(), ipAddress);
    }
  }
}
