import { defineConfig } from "orval";

export default defineConfig({
  estateGridApi: {
    input: {
      target: "./openapi.json",
    },
    output: {
      mode: "split",
      target: "./src/openapi/generated/estate-grid.ts",
      schemas: "./src/openapi/generated/model",
      client: "fetch",
      httpClient: "fetch",
      baseUrl: {
        runtime: "getEstateGridApiBaseUrl()",
        imports: [
          {
            name: "getEstateGridApiBaseUrl",
            importPath: "../base-url",
          },
        ],
      },
      clean: true,
      prettier: true,
    },
  },
});
