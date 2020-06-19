import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  external: ['eva-icons'],
  input: 'src/index.js',
  output: {
    file: 'dist/vue-eva-input.min.js',
    format: 'umd',
    globals: { 'eva-icons': 'eva' },
    name: 'vue-eva-input'
  },
  plugins: [
    babel({
      babelrc: true
    }),
    resolve({ browser: true, mainFields: ['module', 'main', 'jsnext:main'] }),
    vue({ css: true, compileTemplate: true })
  ]
}
