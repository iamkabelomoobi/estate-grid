import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { executeGraphQL } from "../openapi/generated/estate-grid";

type GraphQLResult<TData> = {
  data?: TData | null;
  errors?: Array<{
    message: string;
    path?: Array<string | number>;
    extensions?: Record<string, unknown>;
  }>;
};

export class EstateGridGraphQLError extends Error {
  public readonly errors: NonNullable<GraphQLResult<unknown>["errors"]>;

  constructor(errors: NonNullable<GraphQLResult<unknown>["errors"]>) {
    super(errors.map((error) => error.message).join("\n"));
    this.name = "EstateGridGraphQLError";
    this.errors = errors;
  }
}

export const requestGraphQL = async <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: RequestInit,
): Promise<TData> => {
  const response = await executeGraphQL(
    {
      query: print(document),
      variables: (variables ?? {}) as Record<string, unknown>,
    },
    options,
  );

  const result = response.data as GraphQLResult<TData>;

  if (result.errors?.length) {
    throw new EstateGridGraphQLError(result.errors);
  }

  return result.data as TData;
};
