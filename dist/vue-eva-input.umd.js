(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('eva-icons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'eva-icons'], factory) :
  (global = global || self, factory(global.eva = {}, global.eva));
}(this, (function (exports, eva) { 'use strict';

  //

  var script = {
    name: "EvaInput",
    inheritAttrs: false,
    props: {
      autocomplete: { type: String, default: "off" },
      disabled: Boolean,
      focusPlaceholder: { type: String, default: "Typing..." },
      placeholder: String,
      primary: Boolean,
      readonly: Boolean,
      status: String,
      suffixIcon: String,
      tabindex: String,
      type: { type: String, default: "text" },
      value: [String, Number]
    },
    data() {
      return {
        isFocus: false,
        stringValue: null
      };
    },
    computed: {
      stringPlaceholder() {
        if (this.isFocus) {
          return this.focusPlaceholder;
        } else {
          return this.placeholder || "";
        }
      }
    },
    mounted() {
      eva.replace();
    },
    methods: {
      handleBlur(e) {
        this.isFocus = false;
        this.$emit("blur", e);
      },
      handleFocus(e) {
        this.isFocus = true;
        this.$emit("focus", e);
      },
      handleInput(e) {
        let _value = e.target.value;
        this.stringValue = _value || null;
        this.$emit("input", _value || null);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "eva-input" }, [
      _c(
        "input",
        _vm._b(
          {
            staticClass: "eva-input__inner",
            class: [
              {
                "has-icon": _vm.suffixIcon,
                "is-danger": _vm.status === "danger",
                "is-focus": _vm.isFocus,
                "is-info": _vm.status === "info",
                "is-primary": _vm.primary,
                "is-success": _vm.status === "success",
                "is-warning": _vm.status === "warning"
              }
            ],
            attrs: {
              disabled: _vm.disabled,
              placeholder: _vm.stringPlaceholder,
              readonly: _vm.readonly,
              tabindex: _vm.tabindex,
              type: _vm.type
            },
            domProps: { value: _vm.stringValue },
            on: {
              blur: _vm.handleBlur,
              focus: _vm.handleFocus,
              input: _vm.handleInput
            }
          },
          "input",
          _vm.$attrs,
          false
        )
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "eva-input__icon",
        attrs: { "data-eva": _vm.suffixIcon }
      })
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-6ab82c10_0", { source: "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap\");\n.eva-input {\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 343px;\n}\n.eva-input .eva-input__inner {\n  box-sizing: border-box;\n  display: block;\n  height: 48px;\n  width: 100%;\n  padding: 0 16px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 24px;\n  color: #222b45;\n  background: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 12px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  outline: 0;\n  overflow: hidden;\n  transition: 0.15s;\n}\n.eva-input .eva-input__inner::placeholder {\n  font-weight: normal;\n  color: #8f9bb3;\n}\n.eva-input .eva-input__inner:focus {\n  background: #ffffff;\n}\n.eva-input .eva-input__inner:focus::placeholder {\n  color: #222b45;\n}\n.eva-input .eva-input__inner:hover:not(:disabled) {\n  background: #edf1f7;\n}\n.eva-input .eva-input__inner.has-icon {\n  padding-right: 48px;\n}\n.eva-input .eva-input__inner:disabled {\n  cursor: not-allowed;\n  border: 1px solid #e4e9f2;\n}\n.eva-input .eva-input__inner:disabled::placeholder {\n  color: rgba(143, 155, 179, 0.48);\n}\n.eva-input .eva-input__inner:disabled ~ .eva-input__icon {\n  fill: rgba(143, 155, 179, 0.4);\n}\n.eva-input .eva-input__inner.is-primary {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.24);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.eva-input .eva-input__inner.is-primary::placeholder {\n  color: #ffffff;\n}\n.eva-input .eva-input__inner.is-primary:focus {\n  border-color: #ffffff;\n  background: rgba(255, 255, 255, 0.32);\n}\n.eva-input .eva-input__inner.is-primary:hover:not(:disabled) {\n  border-color: #ffffff;\n  background: rgba(255, 255, 255, 0.32);\n}\n.eva-input .eva-input__inner.is-primary:disabled {\n  border-color: rgba(255, 255, 255, 0.4);\n  background: rgba(255, 255, 255, 0.16);\n}\n.eva-input .eva-input__inner.is-primary ~ .eva-input__icon {\n  fill: #ffffff;\n}\n.eva-input .eva-input__inner.is-primary ~ .eva-input__icon.is-disabled {\n  fill: rgba(228, 233, 242, 0.4);\n}\n.eva-input .eva-input__inner.is-danger {\n  border-color: #ff3d71;\n}\n.eva-input .eva-input__inner.is-danger ~ .eva-input__icon {\n  fill: #ff3d71;\n}\n.eva-input .eva-input__inner.is-info {\n  border-color: #0095ff;\n}\n.eva-input .eva-input__inner.is-info ~ .eva-input__icon {\n  fill: #0095ff;\n}\n.eva-input .eva-input__inner.is-success {\n  border-color: #00e096;\n}\n.eva-input .eva-input__inner.is-success ~ .eva-input__icon {\n  fill: #00e096;\n}\n.eva-input .eva-input__inner.is-warning {\n  border-color: #ffaa00;\n}\n.eva-input .eva-input__inner.is-warning ~ .eva-input__icon {\n  fill: #ffaa00;\n}\n.eva-input .eva-input__inner.is-focus {\n  border-color: #3366ff !important;\n}\n.eva-input .eva-input__inner.is-focus::placeholder {\n  font-weight: 600;\n}\n.eva-input .eva-input__inner.is-focus ~ .eva-input__icon {\n  fill: #3366ff;\n}\n.eva-input .eva-input__inner.is-focus ~ .eva-input__icon.is-primary {\n  fill: #ffffff;\n}\n.eva-input .eva-input__icon {\n  pointer-events: none;\n  display: block;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 24px;\n  fill: #8f9bb3;\n  transition: 0.15s;\n}\n\n/*# sourceMappingURL=EvaInput.vue.map */", map: {"version":3,"sources":["/Users/ysj/Documents/Git/vue-eva-input/src/EvaInput.vue","EvaInput.vue"],"names":[],"mappings":"AAqFA,yFAAA;AAgBA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,YAAA;ACnGA;ADqGA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,oCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAvBA;EAwBA,mBA9BA;EA+BA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;ACnGA;ADqGA;EACA,mBAAA;EACA,cArCA;AC9DA;ADqGA;EACA,mBA7CA;ACtDA;ADqGA;EACA,cAzCA;AC1DA;ADsGA;EACA,mBAlDA;AClDA;ADsGA;EACA,mBAAA;ACpGA;ADsGA;EACA,mBAAA;EACA,yBAAA;ACpGA;ADsGA;EACA,gCAAA;ACpGA;ADuGA;EACA,8BAAA;ACrGA;ADyGA;EACA,cAvEA;EAwEA,qCAAA;EACA,sCAAA;ACvGA;ADyGA;EACA,cA5EA;AC3BA;ADyGA;EACA,qBA/EA;EAgFA,qCAAA;ACvGA;ADyGA;EACA,qBAnFA;EAoFA,qCAAA;ACvGA;ADyGA;EACA,sCAAA;EACA,qCAAA;ACvGA;AD0GA;EACA,aA5FA;ACZA;AD0GA;EACA,8BAAA;ACxGA;AD6GA;EACA,qBA7FA;ACdA;AD6GA;EACA,aAhGA;ACXA;AD8GA;EACA,qBAnGA;ACTA;AD8GA;EACA,aAtGA;ACNA;AD+GA;EACA,qBAxGA;ACLA;AD+GA;EACA,aA3GA;ACFA;ADgHA;EACA,qBA9GA;ACAA;ADgHA;EACA,aAjHA;ACGA;ADiHA;EACA,gCAAA;AC/GA;ADiHA;EACA,gBAAA;AC/GA;ADkHA;EACA,aA9HA;ACcA;ADkHA;EACA,aA3IA;AC2BA;ADsHA;EACA,oBAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,aAnJA;EAoJA,iBAAA;ACpHA;;AAEA,uCAAuC","file":"EvaInput.vue","sourcesContent":["<template>\n  <div class=\"eva-input\">\n    <input\n      class=\"eva-input__inner\"\n      v-bind=\"$attrs\"\n      :class=\"[{\n        'has-icon': suffixIcon,\n        'is-danger': status === 'danger',\n        'is-focus': isFocus,\n        'is-info': status === 'info',\n        'is-primary': primary,\n        'is-success': status === 'success',\n        'is-warning': status === 'warning'\n      }]\"\n      :disabled=\"disabled\"\n      :placeholder=\"stringPlaceholder\"\n      :readonly=\"readonly\"\n      :tabindex=\"tabindex\"\n      :type=\"type\"\n      :value=\"stringValue\"\n      @blur=\"handleBlur\"\n      @focus=\"handleFocus\"\n      @input=\"handleInput\"\n    />\n\n    <i class=\"eva-input__icon\" :data-eva=\"suffixIcon\" />\n  </div>\n</template>\n\n<script>\nimport * as eva from \"eva-icons\";\n\nexport default {\n  name: \"EvaInput\",\n  inheritAttrs: false,\n  props: {\n    autocomplete: { type: String, default: \"off\" },\n    disabled: Boolean,\n    focusPlaceholder: { type: String, default: \"Typing...\" },\n    placeholder: String,\n    primary: Boolean,\n    readonly: Boolean,\n    status: String,\n    suffixIcon: String,\n    tabindex: String,\n    type: { type: String, default: \"text\" },\n    value: [String, Number]\n  },\n  data() {\n    return {\n      isFocus: false,\n      stringValue: null\n    };\n  },\n  computed: {\n    stringPlaceholder() {\n      if (this.isFocus) {\n        return this.focusPlaceholder;\n      } else {\n        return this.placeholder || \"\";\n      }\n    }\n  },\n  mounted() {\n    eva.replace();\n  },\n  methods: {\n    handleBlur(e) {\n      this.isFocus = false;\n      this.$emit(\"blur\", e);\n    },\n    handleFocus(e) {\n      this.isFocus = true;\n      this.$emit(\"focus\", e);\n    },\n    handleInput(e) {\n      let _value = e.target.value;\n      this.stringValue = _value || null;\n      this.$emit(\"input\", _value || null);\n    }\n  }\n};\n</script>\n\n<style lang=\"scss\">\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap\");\n\n$--color-basic-100: #ffffff;\n$--color-basic-200: #f7f9fc;\n$--color-basic-300: #edf1f7;\n$--color-basic-400: #e4e9f2;\n$--color-basic-500: #c5cee0;\n$--color-basic-600: #8f9bb3;\n$--color-basic-700: #2e3a59;\n$--color-basic-800: #222b45;\n$--color-danger-500: #ff3d71;\n$--color-info-500: #0095ff;\n$--color-primary-500: #3366ff;\n$--color-success-500: #00e096;\n$--color-warning-500: #ffaa00;\n\n.eva-input {\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 343px;\n\n  .eva-input__inner {\n    box-sizing: border-box;\n    display: block;\n    height: 48px;\n    width: 100%;\n    padding: 0 16px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n    line-height: 24px;\n    color: $--color-basic-800;\n    background: $--color-basic-200;\n    border: 1px solid $--color-basic-400;\n    border-radius: 12px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    outline: 0;\n    overflow: hidden;\n    transition: 0.15s;\n\n    &::placeholder {\n      font-weight: normal;\n      color: $--color-basic-600;\n    }\n    &:focus {\n      background: $--color-basic-100;\n\n      &::placeholder {\n        color: $--color-basic-800;\n      }\n    }\n    &:hover:not(:disabled) {\n      background: $--color-basic-300;\n    }\n    &.has-icon {\n      padding-right: 48px;\n    }\n    &:disabled {\n      cursor: not-allowed;\n      border: 1px solid $--color-basic-400;\n\n      &::placeholder {\n        color: rgba($--color-basic-600, 0.48);\n      }\n\n      ~ .eva-input__icon {\n        fill: rgba($--color-basic-600, 0.4);\n      }\n    }\n\n    &.is-primary {\n      color: $--color-basic-100;\n      background: rgba($--color-basic-100, 0.24);\n      border-color: rgba($--color-basic-100, 0.4);\n\n      &::placeholder {\n        color: $--color-basic-100;\n      }\n      &:focus {\n        border-color: $--color-basic-100;\n        background: rgba($--color-basic-100, 0.32);\n      }\n      &:hover:not(:disabled) {\n        border-color: $--color-basic-100;\n        background: rgba($--color-basic-100, 0.32);\n      }\n      &:disabled {\n        border-color: rgba($--color-basic-100, 0.4);\n        background: rgba($--color-basic-100, 0.16);\n      }\n\n      ~ .eva-input__icon {\n        fill: $--color-basic-100;\n\n        &.is-disabled {\n          fill: rgba($--color-basic-400, 0.4);\n        }\n      }\n    }\n\n    &.is-danger {\n      border-color: $--color-danger-500;\n\n      ~ .eva-input__icon {\n        fill: $--color-danger-500;\n      }\n    }\n    &.is-info {\n      border-color: $--color-info-500;\n\n      ~ .eva-input__icon {\n        fill: $--color-info-500;\n      }\n    }\n    &.is-success {\n      border-color: $--color-success-500;\n\n      ~ .eva-input__icon {\n        fill: $--color-success-500;\n      }\n    }\n    &.is-warning {\n      border-color: $--color-warning-500;\n\n      ~ .eva-input__icon {\n        fill: $--color-warning-500;\n      }\n    }\n    &.is-focus {\n      border-color: $--color-primary-500 !important;\n\n      &::placeholder {\n        font-weight: 600;\n      }\n\n      ~ .eva-input__icon {\n        fill: $--color-primary-500;\n\n        &.is-primary {\n          fill: $--color-basic-100;\n        }\n      }\n    }\n  }\n\n  .eva-input__icon {\n    pointer-events: none;\n    display: block;\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    font-size: 24px;\n    fill: $--color-basic-600;\n    transition: 0.15s;\n  }\n}\n</style>\n","@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap\");\n.eva-input {\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 343px;\n}\n.eva-input .eva-input__inner {\n  box-sizing: border-box;\n  display: block;\n  height: 48px;\n  width: 100%;\n  padding: 0 16px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 24px;\n  color: #222b45;\n  background: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 12px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  outline: 0;\n  overflow: hidden;\n  transition: 0.15s;\n}\n.eva-input .eva-input__inner::placeholder {\n  font-weight: normal;\n  color: #8f9bb3;\n}\n.eva-input .eva-input__inner:focus {\n  background: #ffffff;\n}\n.eva-input .eva-input__inner:focus::placeholder {\n  color: #222b45;\n}\n.eva-input .eva-input__inner:hover:not(:disabled) {\n  background: #edf1f7;\n}\n.eva-input .eva-input__inner.has-icon {\n  padding-right: 48px;\n}\n.eva-input .eva-input__inner:disabled {\n  cursor: not-allowed;\n  border: 1px solid #e4e9f2;\n}\n.eva-input .eva-input__inner:disabled::placeholder {\n  color: rgba(143, 155, 179, 0.48);\n}\n.eva-input .eva-input__inner:disabled ~ .eva-input__icon {\n  fill: rgba(143, 155, 179, 0.4);\n}\n.eva-input .eva-input__inner.is-primary {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.24);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.eva-input .eva-input__inner.is-primary::placeholder {\n  color: #ffffff;\n}\n.eva-input .eva-input__inner.is-primary:focus {\n  border-color: #ffffff;\n  background: rgba(255, 255, 255, 0.32);\n}\n.eva-input .eva-input__inner.is-primary:hover:not(:disabled) {\n  border-color: #ffffff;\n  background: rgba(255, 255, 255, 0.32);\n}\n.eva-input .eva-input__inner.is-primary:disabled {\n  border-color: rgba(255, 255, 255, 0.4);\n  background: rgba(255, 255, 255, 0.16);\n}\n.eva-input .eva-input__inner.is-primary ~ .eva-input__icon {\n  fill: #ffffff;\n}\n.eva-input .eva-input__inner.is-primary ~ .eva-input__icon.is-disabled {\n  fill: rgba(228, 233, 242, 0.4);\n}\n.eva-input .eva-input__inner.is-danger {\n  border-color: #ff3d71;\n}\n.eva-input .eva-input__inner.is-danger ~ .eva-input__icon {\n  fill: #ff3d71;\n}\n.eva-input .eva-input__inner.is-info {\n  border-color: #0095ff;\n}\n.eva-input .eva-input__inner.is-info ~ .eva-input__icon {\n  fill: #0095ff;\n}\n.eva-input .eva-input__inner.is-success {\n  border-color: #00e096;\n}\n.eva-input .eva-input__inner.is-success ~ .eva-input__icon {\n  fill: #00e096;\n}\n.eva-input .eva-input__inner.is-warning {\n  border-color: #ffaa00;\n}\n.eva-input .eva-input__inner.is-warning ~ .eva-input__icon {\n  fill: #ffaa00;\n}\n.eva-input .eva-input__inner.is-focus {\n  border-color: #3366ff !important;\n}\n.eva-input .eva-input__inner.is-focus::placeholder {\n  font-weight: 600;\n}\n.eva-input .eva-input__inner.is-focus ~ .eva-input__icon {\n  fill: #3366ff;\n}\n.eva-input .eva-input__inner.is-focus ~ .eva-input__icon.is-primary {\n  fill: #ffffff;\n}\n.eva-input .eva-input__icon {\n  pointer-events: none;\n  display: block;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 24px;\n  fill: #8f9bb3;\n  transition: 0.15s;\n}\n\n/*# sourceMappingURL=EvaInput.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) return;
    Vue.component("EvaInput", __vue_component__);
  }

  // Create module definition for Vue.use()
  const plugin = { install };
  // Auto-install when vue is found (eg. in browser via <script> tag)
  let GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) GlobalVue.use(plugin);

  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
