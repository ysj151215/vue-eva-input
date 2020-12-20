import EvaInput from './EvaInput.vue'

const plugin = {
  install(Vue) {
    Vue.component('EvaInput', EvaInput)
  },
}

export { EvaInput }
export default plugin
