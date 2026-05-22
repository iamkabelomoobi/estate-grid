# Estate Grid

Estate Grid is a TypeScript monorepo for a real estate marketplace platform. It includes a GraphQL-first API server, a Next.js web app, an Expo mobile app, shared authentication, database, email, logging, and generated client SDK packages.

## Contents

- [Architecture](#architecture)
- [Apps and Packages](#apps-and-packages)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Environment](#environment)
- [Development](#development)
- [Database](#database)
- [API Surface](#api-surface)
- [Generated Client SDK](#generated-client-sdk)
- [Authentication and Authorization](#authentication-and-authorization)
- [Testing and Quality](#testing-and-quality)
- [Docker](#docker)
- [Common Workflows](#common-workflows)
- [Troubleshooting](#troubleshooting)

## Architecture

The project is organized as an npm workspace monorepo.

The backend is GraphQL-first and exposes:

- `/graphql` for the main platform API.
- `/api/auth/*` for Better Auth HTTP routes.
- `/openapi.json` for OpenAPI metadata.
- `/docs` for Swagger UI.

Client applications consume the API through `@estate-grid/client`, which contains:

- GraphQL typed documents generated from the exported server schema.
- A fetch-based OpenAPI SDK generated with Orval.
- A small `requestGraphQL` helper for typed GraphQL calls.

## Apps and Packages

### Apps

| Path          | Purpose                                                                                |
| ------------- | -------------------------------------------------------------------------------------- |
| `apps/server` | Express, Apollo Server, Pothos GraphQL, Better Auth, queue/search/storage integrations |
| `apps/web`    | Next.js web client                                                                     |
| `apps/mobile` | Expo React Native client                                                               |

### Packages

| Path              | Package               | Purpose                                                                    |
| ----------------- | --------------------- | -------------------------------------------------------------------------- |
| `packages/auth`   | `@estate-grid/auth`   | Better Auth configuration, auth client exports, role record helpers        |
| `packages/client` | `@estate-grid/client` | Generated GraphQL documents, generated OpenAPI SDK, GraphQL request helper |
| `packages/db`     | `@estate-grid/db`     | Prisma schema, Prisma client exports, seed script                          |
| `packages/email`  | `@estate-grid/email`  | Email templates and delivery helpers                                       |
| `packages/logger` | `@estate-grid/logger` | Shared Winston/Logtail logger                                              |
| `packages/config` | `@estate-grid/config` | Shared lint/prettier config package                                        |
| `packages/types`  | `@estate-grid/types`  | Shared type exports                                                        |

## Prerequisites

- Node.js `>=18`
- npm `11.3.0` or compatible npm workspace support
- Docker and Docker Compose for local services
- PostgreSQL for the API database
- Redis when using BullMQ-backed queues

The repo uses TypeScript, ESM packages, Turbo, Prisma, Better Auth, Apollo Server, Pothos, Next.js, Expo, GraphQL Code Generator, and Orval.

## Local Setup

1. Install dependencies:

```sh
npm install
```

2. Create a local environment file:

```sh
cp .env.example .env
```

3. Start local infrastructure:

```sh
npm run docker:dev
```

This starts the dev PostgreSQL, Redis, and MailHog services defined in `docker-compose.dev.yml`.

4. Build the workspace packages:

```sh
npm run build
```

5. Start development servers:

```sh
npm run dev
```

You can also run apps individually:

```sh
npm run dev --workspace @estate-grid/server
npm run dev --workspace web
npm run dev --workspace mobile
```

## Environment

`.env.example` contains the default local values.

Important variables:

| Variable            | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `DATABASE_URL`      | PostgreSQL connection string used by Prisma and the server               |
| `SERVER_URL`        | Public server URL used by OpenAPI and callbacks                          |
| `FRONTEND_URL`      | Main frontend URL used by auth redirects                                 |
| `ADMIN_URL`         | Admin frontend URL                                                       |
| `RENTER_URL`        | Renter frontend URL                                                      |
| `CORS_ORIGINS`      | Comma-separated allowed browser origins                                  |
| `REDIS_URL`         | Redis connection string                                                  |
| `SEARCH_PROVIDER`   | `elasticsearch` or database fallback behavior depending on server config |
| `ELASTICSEARCH_URL` | Elasticsearch endpoint                                                   |
| `STORAGE_PROVIDER`  | Storage provider selector                                                |
| `AWS_*`             | S3-compatible storage configuration                                      |
| `MAIL_PROVIDER`     | Email provider selector                                                  |
| `MAILHOG_*`         | Local MailHog SMTP/web settings                                          |
| `RESEND_*`          | Resend production email settings                                         |
| `QUEUE_DRIVER`      | `memory` or `bullmq`                                                     |
| `PAYFAST_*`         | PayFast integration settings                                             |

For Better Auth callback correctness, set a valid auth/server URL in environments where redirects are used. Build logs may warn when Better Auth cannot infer a base URL.

## Development

Root commands:

```sh
npm run dev
npm run build
npm run check-types
npm run lint
npm run format
```

Server commands:

```sh
npm run dev --workspace @estate-grid/server
npm run build --workspace @estate-grid/server
npm run check-types --workspace @estate-grid/server
npm test --workspace @estate-grid/server
```

Web commands:

```sh
npm run dev --workspace web
npm run build --workspace web
npm run lint --workspace web
```

Mobile commands:

```sh
npm run dev --workspace mobile
npm run android --workspace mobile
npm run ios --workspace mobile
npm run web --workspace mobile
```

## Database

The Prisma schema lives in:

```text
packages/db/prisma/schema.prisma
```

Useful commands:

```sh
npm run db:validate --workspace @estate-grid/db
npm run db:format --workspace @estate-grid/db
npm run seed --workspace @estate-grid/db
```

The server tests and default dev Docker setup expect a local PostgreSQL database. Check `.env.example` and `docker-compose.dev.yml` for the active ports and credentials.

## API Surface

### GraphQL

The primary API is GraphQL:

```text
POST /graphql
```

The schema is generated by:

```sh
npm run schema:export --workspace @estate-grid/server
```

The exported schema is written to:

```text
packages/client/schema.graphql
```

### OpenAPI

OpenAPI is used for the shared HTTP surface:

```text
GET /openapi.json
GET /docs
POST /api/auth/sign-up/email
POST /api/auth/sign-in/email
POST /api/auth/sign-out
GET /api/auth/get-session
POST /graphql
```

Export the OpenAPI document with:

```sh
npm run openapi:export --workspace @estate-grid/server
```

The exported document is written to:

```text
packages/client/openapi.json
```

## Generated Client SDK

The shared client SDK is in:

```text
packages/client
```

Full SDK documentation is available at:

```text
packages/client/docs/sdk-usage.md
```

### Regenerate Everything

```sh
npm run bootstrap --workspace @estate-grid/client
```

This builds schema dependencies, exports GraphQL/OpenAPI artifacts, generates GraphQL operation documents, generates GraphQL types, and generates the Orval OpenAPI SDK.

### GraphQL SDK

The package generates typed operation documents for all top-level GraphQL queries and mutations.

Usage:

```ts
import { QueryPropertiesDocument, requestGraphQL } from "@estate-grid/client";

const data = await requestGraphQL(
  QueryPropertiesDocument,
  {
    filter: {
      city: "Johannesburg",
      limit: 12,
    },
  },
  {
    credentials: "include",
  },
);

console.log(data.properties);
```

Mutation usage:

```ts
import {
  MutationCreateInquiryDocument,
  requestGraphQL,
} from "@estate-grid/client";

await requestGraphQL(
  MutationCreateInquiryDocument,
  {
    propertyId: "property-id",
    input: {
      name: "Example User",
      email: "user@example.com",
      message: "I want to view this property.",
    },
  },
  {
    credentials: "include",
  },
);
```

Generated GraphQL operation names follow:

```text
Query<FieldName>Document
Mutation<FieldName>Document
```

Examples:

- `QueryMeDocument`
- `QueryPropertiesDocument`
- `QueryPropertySearchDocument`
- `QueryServiceListingsDocument`
- `MutationCreatePropertyDocument`
- `MutationScheduleViewingDocument`
- `MutationSendMessageDocument`

### OpenAPI SDK

The Orval-generated SDK exposes fetch functions for auth and shared HTTP endpoints.

Browser example:

```ts
import { getSession, signInWithEmail } from "@estate-grid/client";

await signInWithEmail(
  {
    email: "user@example.com",
    password: "Passw0rd!123",
  },
  {
    credentials: "include",
  },
);

const session = await getSession({ credentials: "include" });
```

Mobile or cross-origin setup:

```ts
import {
  getSession,
  setEstateGridApiBaseUrl,
  signInWithEmail,
} from "@estate-grid/client";

setEstateGridApiBaseUrl("http://192.168.1.25:4000");

await signInWithEmail({
  email: "user@example.com",
  password: "Passw0rd!123",
});

const session = await getSession();
```

OpenAPI functions include:

- `signUpWithEmail`
- `signInWithEmail`
- `signOut`
- `getSession`
- `executeGraphQL`
- `getOpenApiDocument`
- `renderDocs`

## Authentication and Authorization

Authentication is handled by Better Auth in `@estate-grid/auth`.

Key points:

- Email/password auth is enabled.
- Email verification is required.
- Better Auth routes are mounted under `/api/auth/*`.
- The server GraphQL context loads sessions from Better Auth headers/cookies.
- User roles are modeled by `UserRole` in Prisma.
- Main roles are `ADMIN`, `AGENT`, `OWNER`, `BUYER`, and `RENTER`.
- GraphQL uses Pothos scope auth plus resolver-level ownership checks.
- Self-service profile updates must not bypass verified Better Auth email-change flows.

For authenticated browser requests, pass:

```ts
{
  credentials: "include";
}
```

For React Native, implement explicit cookie/session persistence because browser cookie behavior is not automatic in the same way.

## Testing and Quality

Run all type checks:

```sh
npm run check-types
```

Run server tests:

```sh
npm test --workspace @estate-grid/server
```

Run auth package tests:

```sh
npm test --workspace @estate-grid/auth
```

Run client SDK checks:

```sh
npm run check-types --workspace @estate-grid/client
npm run build --workspace @estate-grid/client
```

Run lint:

```sh
npm run lint
```

Format files:

```sh
npm run format
```

## Docker

Start development services:

```sh
npm run docker:dev
```

Start production stack:

```sh
npm run docker:prod
```

Stop Docker services:

```sh
npm run docker:down
```

Development services include PostgreSQL, Redis, and MailHog. Production compose additionally includes the server, web app, Elasticsearch, and Kibana.

## Common Workflows

### Add or Change a GraphQL Module

1. Update the server module under `apps/server/src/modules`.
2. Export or wire the module through the module index files.
3. Run:

```sh
npm run bootstrap --workspace @estate-grid/client
```

4. Import the generated operation from `@estate-grid/client`.

### Add or Change an Auth HTTP Endpoint

1. Update the server or Better Auth integration.
2. Update `apps/server/src/app/openapi.ts`.
3. Run:

```sh
npm run openapi:export --workspace @estate-grid/client
npm run generate:openapi --workspace @estate-grid/client
```

4. Import the generated fetch function from `@estate-grid/client`.

### Regenerate Client SDKs

```sh
npm run bootstrap --workspace @estate-grid/client
```

### Run Server Locally With Dev Services

```sh
npm run docker:dev
npm run dev --workspace @estate-grid/server
```

### Inspect API Docs

With the server running:

```text
http://localhost:4000/docs
http://localhost:4000/openapi.json
```

## Troubleshooting

### Better Auth Base URL Warning

If builds or schema exports log a Better Auth base URL warning, set the relevant server/auth URL variables in `.env`, especially `SERVER_URL` and frontend callback URLs.

### Database Connection Fails

Check that Docker services are running:

```sh
docker compose --env-file .env -f docker-compose.dev.yml ps
```

Confirm `DATABASE_URL` matches the dev compose port. In `.env.example`, dev PostgreSQL uses host port `5433`.

### SDK Types Are Stale

Regenerate the client package:

```sh
npm run bootstrap --workspace @estate-grid/client
```

### React Native Requests Hit Relative URLs

Set an absolute API base URL before making SDK calls:

```ts
import { setEstateGridApiBaseUrl } from "@estate-grid/client";

setEstateGridApiBaseUrl("http://192.168.1.25:4000");
```

### Audit Warnings

`npm install` may report dependency audit findings. Review them before running automatic fixes, especially `npm audit fix --force`, because forced fixes can introduce breaking package changes.
