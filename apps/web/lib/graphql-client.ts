import { requestGraphQL } from "@estate-grid/client";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { headers } from "next/headers";

import { configureEstateGridSdk } from "@/lib/sdk";

export async function fetchGraphQL<TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
): Promise<TData> {
  const requestHeaders = await headers();
  const cookie = requestHeaders.get("cookie");

  configureEstateGridSdk();

  return requestGraphQL(document, variables, {
    cache: "no-store",
    headers: {
      ...(cookie ? { cookie } : {}),
    },
  });
}
