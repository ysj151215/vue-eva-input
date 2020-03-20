import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";

export default {
  external: ["eva-icons"],
  input: "src/index.js",
  output: {
    file: "dist/vue-eva-input.min.js",
    format: "umd",
    name: "vue-eva-input"
  },
  plugins: [
    babel({
      babelrc: true
    }),
    vue({ css: true, compileTemplate: true })
  ]
};
