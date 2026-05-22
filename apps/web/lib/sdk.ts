import { setEstateGridApiBaseUrl } from "@estate-grid/client";

export const getEstateGridWebApiBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
  process.env.NEXT_PUBLIC_AUTH_URL ||
  process.env.SERVER_URL ||
  process.env.BETTER_AUTH_URL ||
  "http://localhost:4000";

export const configureEstateGridSdk = (): void => {
  setEstateGridApiBaseUrl(getEstateGridWebApiBaseUrl());
};
