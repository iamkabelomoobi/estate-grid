import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import {
  GraphQLArgument,
  GraphQLField,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema,
  buildSchema,
  getNamedType,
  isEnumType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
} from "graphql";

const schemaPath = resolve(process.cwd(), "schema.graphql");
const outputPath = resolve(
  process.cwd(),
  "src/schema/generated/all-modules.graphql",
);

const preferredFields = [
  "id",
  "slug",
  "title",
  "name",
  "email",
  "status",
  "role",
  "createdAt",
  "updatedAt",
];

const operationPrefix = {
  query: "Query",
  mutation: "Mutation",
} as const;

const toPascalCase = (value: string): string =>
  value
    .replace(/(^|[^a-zA-Z0-9])([a-zA-Z0-9])/g, (_, __, char: string) =>
      char.toUpperCase(),
    )
    .replace(/[^a-zA-Z0-9]/g, "");

const unwrapType = (type: GraphQLOutputType): GraphQLNamedType => {
  if (isNonNullType(type) || isListType(type)) {
    return unwrapType(type.ofType);
  }
  return getNamedType(type);
};

const hasRequiredArgs = (field: GraphQLField<unknown, unknown>): boolean =>
  field.args.some((arg) => isNonNullType(arg.type));

const argDefinitions = (args: readonly GraphQLArgument[]): string => {
  if (args.length === 0) return "";
  return `(${args.map((arg) => `$${arg.name}: ${arg.type.toString()}`).join(", ")})`;
};

const argUsages = (args: readonly GraphQLArgument[]): string => {
  if (args.length === 0) return "";
  return `(${args.map((arg) => `${arg.name}: $${arg.name}`).join(", ")})`;
};

const scalarFieldNames = (type: GraphQLObjectType): string[] => {
  const fields = type.getFields();
  const scalarNames = Object.values(fields)
    .filter((field) => !hasRequiredArgs(field))
    .filter((field) => {
      const namedType = unwrapType(field.type);
      return isScalarType(namedType) || isEnumType(namedType);
    })
    .map((field) => field.name);

  const preferred = preferredFields.filter((field) =>
    scalarNames.includes(field),
  );
  const fallback = scalarNames
    .filter((field) => !preferred.includes(field))
    .slice(0, 6);

  return [...preferred, ...fallback];
};

const objectFieldSelections = (
  type: GraphQLObjectType,
  depth: number,
): string[] => {
  if (depth > 1) return [];

  return Object.values(type.getFields())
    .filter((field) => !hasRequiredArgs(field))
    .flatMap((field) => {
      const namedType = unwrapType(field.type);
      if (!isObjectType(namedType)) return [];

      const childScalars = scalarFieldNames(namedType).slice(0, 4);
      if (childScalars.length === 0) return [];

      return [
        `${field.name} {
${childScalars.map((child) => `      ${child}`).join("\n")}
    }`,
      ];
    })
    .slice(0, 3);
};

const selectionSet = (type: GraphQLOutputType): string => {
  const namedType = unwrapType(type);

  if (isScalarType(namedType) || isEnumType(namedType)) {
    return "";
  }

  if (!isObjectType(namedType)) {
    return ` {
    __typename
  }`;
  }

  const fields = [
    ...scalarFieldNames(namedType).slice(0, 10),
    ...objectFieldSelections(namedType, 0),
  ];

  if (fields.length === 0) {
    return ` {
    __typename
  }`;
  }

  return ` {
    ${fields.join("\n    ")}
  }`;
};

const generateOperation = (
  kind: keyof typeof operationPrefix,
  field: GraphQLField<unknown, unknown>,
): string => {
  const operationName = `${operationPrefix[kind]}${toPascalCase(field.name)}`;
  return `${kind} ${operationName}${argDefinitions(field.args)} {
  ${field.name}${argUsages(field.args)}${selectionSet(field.type)}
}`;
};

const generateOperations = (
  schema: GraphQLSchema,
  kind: keyof typeof operationPrefix,
): string[] => {
  const rootType =
    kind === "query" ? schema.getQueryType() : schema.getMutationType();

  if (!rootType) return [];

  return Object.values(rootType.getFields()).map((field) =>
    generateOperation(kind, field),
  );
};

const schema = buildSchema(readFileSync(schemaPath, "utf8"));
const operations = [
  "# Generated from schema.graphql. Do not edit manually.",
  "# Run `npm run generate:graphql-operations --workspace @estate-grid/client`.",
  "",
  ...generateOperations(schema, "query"),
  ...generateOperations(schema, "mutation"),
];

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${operations.join("\n\n")}\n`);

console.log(`GraphQL operations generated to ${outputPath}`);
