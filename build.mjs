import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };
import stylexPlugin from "@stylexjs/esbuild-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes("--watch");
const dev = process.argv.includes("--dev");
const minify = !dev && !watch;

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minify,
    sourcemap: watch,
    target: "es2020",
    legalComments: "none",
    format: "esm",
    splitting: true,
    entryPoints: { Plugin: "Resources/Private/RangeEditor/manifest.js",
        RangeEditor: "Resources/Private/RangeEditor/RangeEditor.jsx",
     },
    loader: {
        ".js": "jsx",
    },
    outdir: "Resources/Public",
    alias: extensibilityMap,
    plugins: [
        stylexPlugin({
            classNamePrefix: "range-",
            useCSSLayers: false,
            dev: false,
            generatedCSSFileName: path.resolve(
                __dirname,
                "Resources/Public/Plugin.css",
            ),
            stylexImports: ["@stylexjs/stylex"],
            unstable_moduleResolution: {
                type: "commonJS",
                rootDir: __dirname,
            },
        }),
    ],
};

if (minify) {
    options.drop = ["debugger"];
    options.pure = ["console.log"];
    options.dropLabels = ["DEV"];
}

if (watch) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
