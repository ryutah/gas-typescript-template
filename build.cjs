/* eslint node/no-unpublished-require: off, no-process-exit: off */

const { GasPlugin } = require("esbuild-gas-plugin");

require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    platform: "node",
    bundle: true,
    outfile: "prod/main.js",
    plugins: [GasPlugin],
  })
  .catch(() => process.exit(1));
