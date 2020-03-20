# Eva Input for Vue.js

![vue eva input design.](https://i.imgur.com/LWiilqr.png)

## Demo
[CodeSandBox](https://codesandbox.io/s/fragrant-shadow-4qck2)

## Install

```
npm install --save vue-eva-input
```

## Usage

```javascript
import Vue from "vue";
import VueEvaInput from "vue-eva-input";

Vue.use(VueEvaInput);
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
