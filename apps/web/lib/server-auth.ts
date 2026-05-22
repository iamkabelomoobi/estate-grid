import { getSession } from "@estate-grid/client";
import { logger } from "@estate-grid/logger";
import { headers } from "next/headers";

import { configureEstateGridSdk, getEstateGridWebApiBaseUrl } from "@/lib/sdk";

export type ServerSession = Awaited<ReturnType<typeof getSession>>["data"];

export const getServerSession = async (): Promise<ServerSession> => {
  const requestHeaders = await headers();
  const cookie = requestHeaders.get("cookie");

  if (!cookie) return null;

  configureEstateGridSdk();

  try {
    const response = await getSession({
      cache: "no-store",
      headers: { cookie },
    });

    if (response.status < 200 || response.status >= 300) {
      logger.warn("Failed to fetch server session", {
        status: response.status,
        url: `${getEstateGridWebApiBaseUrl()}/api/auth/get-session`,
      });
      return null;
    }

    return response.data;
  } catch (error) {
    logger.error("Unexpected error fetching server session", { error });
    return null;
  }
};
