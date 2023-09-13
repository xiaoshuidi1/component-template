import postcssImport from "postcss-import";
import babel from "rollup-plugin-babel";
import cleanup from "rollup-plugin-cleanup";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const isProd = process.env.NODE_ENV === "production";

const basePlugins = [
  commonjs({ ignore: ["conditional-runtime-dependency"] }),
  babel({
    exclude: "node_modules/**",
  }),
  typescript(),
  postcss({
    plugins: [postcssImport()],
    extract: true,
    minimize: true,
  }),
];

const prodPlugins = [cleanup(), terser()];

const plugins = isProd ? prodPlugins : [];

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
    },
    {
      file: "es/index.js",
      format: "es",
    },
  ],
  plugins: [...basePlugins, ...plugins],
  external: ["react", "react-dom", "antd", "@ezviz/ezd"],
};
