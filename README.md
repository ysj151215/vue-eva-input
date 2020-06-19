# Eva Input for Vue.js

A beautiful input component based on Eva Design System and Vue.

## Example

[![Edit fragrant-shadow-4qck2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fragrant-shadow-4qck2?fontsize=14&hidenavigation=1&theme=dark)

## Install

```
$ npm install --save vue-eva-input
```

```
$ yarn add vue-eva-input
```

## Usage

```javascript
import Vue from 'vue'
import VueEvaInput from 'vue-eva-input'

Vue.use(VueEvaInput)
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

## License

[MIT](https://opensource.org/licenses/MIT)
