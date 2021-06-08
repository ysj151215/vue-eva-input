import { DefineComponent, Plugin } from 'vue'

declare const VueEvaInput: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> }

export default VueEvaInput
