# Eva Input for Vue.js

> Wish you like it. ❤️

A beautiful input component based on Eva Design System and Vue.

## Example

[![Edit fragrant-shadow-4qck2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fragrant-shadow-4qck2?fontsize=14&hidenavigation=1&theme=dark)

## Install (Before v1.0.5)

```
$ npm install --save vue-eva-input
$ yarn add vue-eva-input
```

## Install (Since v1.0.5)

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

### Props

| props             |      type       |   default   | Description                                                  |
| ----------------- | :-------------: | :---------: | ------------------------------------------------------------ |
| autocomplete      |     String      |    "off"    |
| disabled          |     Boolean     |    false    |
| focus-placeholder |     String      | "Typing..." | only shows when input is focused                             |
| placeholder       |     String      |    null     |
| primary           |     Boolean     |    false    | switch to "primary" theme                                    |
| readonly          |     Boolean     |    false    |
| status            |     String      |    null     | "info", "warning", "danger", "success"                       |
| suffix-icon       |     String      |    null     | see [official website](https://akveo.github.io/eva-icons/#/) |
| tabindex          |     String      |    null     |
| type              |     String      |   "text"    |
| value             | String / Number |    null     |

### How to add input mask?

```
$ npm install --save vue-the-mask

$ yarn add vue-the-mask
```

```javascript
import Vue from 'vue'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
// For more information, please visit https://github.com/vuejs-tips/vue-the-mask
```

```html
<template>
  <eva-input v-mask="'(##) ####-####'" v-model="value" />
</template>
```

## License

[MIT](https://github.com/ysj151215/vue-eva-input/blob/master/LICENSE)
