import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createOpenApiDocument } from "../src/app/openapi.ts";

const outputArg = process.argv[2];

if (!outputArg) {
  throw new Error("Missing output path. Usage: export-openapi <output-path>");
}

const outputPath = resolve(process.cwd(), outputArg);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  `${JSON.stringify(createOpenApiDocument(), null, 2)}\n`,
);

console.log(`OpenAPI document exported to ${outputPath}`);
