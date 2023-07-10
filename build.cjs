/* eslint node/no-unpublished-require: off, no-process-exit: off */

const { GasPlugin } = require("esbuild-gas-plugin");

function getEnvDir() {
  switch (process.env.NODE_ENV) {
    case "production":
      return "prod";
    case "development":
      return "dev";
    case "staging":
      return "stg";
    default:
      return "dev";
  }
}

require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    platform: "node",
    bundle: true,
    outfile: `gas/${getEnvDir()}/main.js`,
    plugins: [GasPlugin],
  })
  .catch(() => process.exit(1));
