import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import json from '@rollup/plugin-json';

export default [
    {
        input: `src/main.js`,
        output: {
            file: `dist/bundle.js`,
            format: "es",
        },
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
                presets: ["@babel/preset-env", "@babel/preset-react"],
            }),
            commonjs(),
            replace({
                preventAssignment: true,
                values: {
                    "process.env.NODE_ENV": JSON.stringify("production"),
                },
            }),
            postcss({
                extract: true,
            }),
            json(),
        ],
        watch: {
            clearScreen: false,
        },
    },
];