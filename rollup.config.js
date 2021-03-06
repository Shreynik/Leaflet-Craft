import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

module.exports = {
  input: "src/FreeDraw.js",
  output: [
    {
      file: "dist/leaflet-freedraw.cjs.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      external: ["ramda", "leaflet"]
    },
    {
      file: "dist/leaflet-freedraw.esm.js",
      format: "esm",
      sourcemap: true,
      exports: "named",
      external: ["ramda", "leaflet"]
    },
    {
      file: "dist/leaflet-freedraw.web.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
      external: ["ramda", "leaflet"]
    },
    {
      file: "dist/leaflet-freedraw.iife.js",
      format: "iife",
      sourcemap: true,
      name: "LeafletFreeDraw",
      exports: "named",
      external: ["ramda", "leaflet"]
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/leaflet/dist/leaflet-src.js": [
          "DomUtil",
          "Point",
          "DivIcon",
          "Marker",
          "DomEvent",
          "Polygon",
          "LineUtil",
          "FeatureGroup"
        ],
        "node_modules/ramda/dist/ramda.js": [
          "flatten",
          "compose",
          "head",
          "complement",
          "identical"
        ]
      }
    }),
    postcss({
      plugins: []
    }),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
