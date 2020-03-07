import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-css-only";
import vue from "rollup-plugin-vue";

export default {
  external: ["eva-icons"],
  input: "src/index.js",
  output: {
    exports: "named",
    name: "eva"
  },
  plugins: [
    css({ output: "vue-eva-input.css" }),
    commonjs(),
    vue({ css: true, compileTemplate: true })
  ]
};
