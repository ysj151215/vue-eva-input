# Eva Input for Vue.js

A beautiful input component based on Eva Design System and Vue 3.

**If you are using Vue 2, please install v1.x instead.**

## Demo

[![Edit fragrant-shadow-4qck2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fragrant-shadow-4qck2?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```
$ npm install --save vue-eva-input
$ yarn add vue-eva-input
```

### Only v1.0.5

```
$ npm install --save vue-eva-input eva-icons
$ yarn add vue-eva-input eva-icons
```

## Usage

```javascript
// main.js
import Vue from 'vue'
import VueEvaInput from 'vue-eva-input'

Vue.use(VueEvaInput)
```

```html
<template>
  <eva-input v-model="value" />
</template>
```

## API Reference

| props             |      type       |   default   | Description                                                  |
| ----------------- | :-------------: | :---------: | ------------------------------------------------------------ |
| focus-placeholder |     String      | "Typing..." | only shows when input is focused                             |
| primary           |     Boolean     |    false    | switch to "primary" theme                                    |
| status            |     String      |    null     | "info", "warning", "danger", "success"                       |
| suffix-icon       |     String      |    null     | see [official website](https://akveo.github.io/eva-icons/#/) |
| value             | String / Number |    null     |

## Tech Stack

- [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup) - Quickly generate redistributable Vue components with Rollup.
- [eva-icons](https://github.com/akveo/eva-icons) - A pack of more than 480 beautifully crafted Open Source icons.

## FAQ

### How to add input mask?

```
$ npm install --save vue-the-mask
$ yarn add vue-the-mask
```

```javascript
import Vue from 'vue'

// For more information, please visit: https://github.com/vuejs-tips/vue-the-mask
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
```

```html
<template>
  <eva-input v-mask="'(##) ####-####'" v-model="value" />
</template>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
