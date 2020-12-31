import component from '@/EvaInput.vue'

const install = function installVueEvaInput(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('EvaInput', component)
}

const plugin = { install }

// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
  }
  if (GlobalVue) {
    GlobalVue.use(plugin)
  }
}

component.install = install

export default component
