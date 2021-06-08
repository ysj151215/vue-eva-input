import { DefineComponent, Plugin } from 'vue'

export type InstallableComponent = DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> }
export type InputStatus = 'danger' | 'info' | 'success' | 'warning'
