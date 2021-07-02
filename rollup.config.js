import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser'
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import json from 'rollup-plugin-json'
export default {
    input:'src/main.ts', //入口
    output: {
        name: 'Staff',
        file: 'dist/Staff.js',
        format: 'iife'
    },
    plugins: [
        commonjs(), // 兼容cjs
        terser(), // 压缩
        babel({
            exclude: 'node_modules/!**',
        }),// 配置babel，将es6转为es5
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript")
        }),
        sourceMaps(), // 支持ts
        json(), // 支持json导出
    ]
}