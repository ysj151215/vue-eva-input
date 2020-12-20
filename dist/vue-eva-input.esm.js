import { replace } from 'eva-icons';

//
var script = {
  name: 'EvaInput',
  inheritAttrs: false,
  props: {
    autocomplete: {
      type: String,
      default: 'off'
    },
    focusPlaceholder: {
      type: String,
      default: 'Typing...'
    },
    placeholder: String,
    primary: Boolean,
    readonly: Boolean,
    status: String,
    suffixIcon: String,
    type: {
      type: String,
      default: 'text'
    },
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
        return this.placeholder || '';
      }
    }

  },
  watch: {
    value: {
      handler() {
        this.handleInput(this.value);
      },

      immediate: true
    }
  },

  mounted() {
    replace();
  },

  methods: {
    handleBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },

    handleFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },

    handleInput(e) {
      let _value = e;
      this.stringValue = _value || null;
      this.$emit('input', _value || null);
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

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "eva-input"
  }, [_c('input', _vm._b({
    staticClass: "eva-input__inner",
    class: [{
      'has-icon': _vm.suffixIcon,
      'is-danger': _vm.status === 'danger',
      'is-focus': _vm.isFocus,
      'is-info': _vm.status === 'info',
      'is-primary': _vm.primary,
      'is-success': _vm.status === 'success',
      'is-warning': _vm.status === 'warning'
    }],
    attrs: {
      "placeholder": _vm.stringPlaceholder,
      "readonly": _vm.readonly,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.stringValue
    },
    on: {
      "blur": _vm.handleBlur,
      "focus": _vm.handleFocus,
      "input": function ($event) {
        return _vm.handleInput($event.target.value);
      }
    }
  }, 'input', _vm.$attrs, false)), _vm._v(" "), _c('i', {
    staticClass: "eva-input__icon",
    attrs: {
      "data-eva": _vm.suffixIcon
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-23295588_0", {
    source: "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap);.eva-input{box-sizing:border-box;display:inline-block;position:relative;width:343px}.eva-input .eva-input__inner{box-sizing:border-box;display:block;height:48px;width:100%;padding:0 16px;font-family:\"Open Sans\",sans-serif;font-size:15px;font-weight:600;line-height:24px;color:#222b45;background:#f7f9fc;background-image:none;border:1px solid #e4e9f2;border-radius:12px;white-space:nowrap;text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;overflow:hidden;box-shadow:none;transition:.15s}.eva-input .eva-input__inner::placeholder{font-weight:400;color:#8f9bb3}.eva-input .eva-input__inner:focus{background:#fff}.eva-input .eva-input__inner:focus::placeholder{color:#222b45}.eva-input .eva-input__inner:hover:not(:disabled){background:#edf1f7}.eva-input .eva-input__inner.has-icon{padding-right:48px}.eva-input .eva-input__inner:disabled{cursor:not-allowed;border:1px solid #e4e9f2}.eva-input .eva-input__inner:disabled::placeholder{color:rgba(143,155,179,.48)}.eva-input .eva-input__inner:disabled~.eva-input__icon{fill:rgba(143,155,179,.4)}.eva-input .eva-input__inner.is-primary{color:#fff;background:rgba(255,255,255,.24);border-color:rgba(255,255,255,.4)}.eva-input .eva-input__inner.is-primary::placeholder{color:#fff}.eva-input .eva-input__inner.is-primary:focus{border-color:#fff;background:rgba(255,255,255,.32)}.eva-input .eva-input__inner.is-primary:hover:not(:disabled){border-color:#fff;background:rgba(255,255,255,.32)}.eva-input .eva-input__inner.is-primary:disabled{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.16)}.eva-input .eva-input__inner.is-primary~.eva-input__icon{fill:#fff}.eva-input .eva-input__inner.is-primary~.eva-input__icon.is-disabled{fill:rgba(228,233,242,.4)}.eva-input .eva-input__inner.is-danger{border-color:#ff3d71}.eva-input .eva-input__inner.is-danger~.eva-input__icon{fill:#ff3d71}.eva-input .eva-input__inner.is-info{border-color:#0095ff}.eva-input .eva-input__inner.is-info~.eva-input__icon{fill:#0095ff}.eva-input .eva-input__inner.is-success{border-color:#00e096}.eva-input .eva-input__inner.is-success~.eva-input__icon{fill:#00e096}.eva-input .eva-input__inner.is-warning{border-color:#fa0}.eva-input .eva-input__inner.is-warning~.eva-input__icon{fill:#fa0}.eva-input .eva-input__inner.is-focus{border-color:#36f!important}.eva-input .eva-input__inner.is-focus::placeholder{font-weight:600}.eva-input .eva-input__inner.is-focus~.eva-input__icon{fill:#36f}.eva-input .eva-input__inner.is-focus~.eva-input__icon.is-primary{fill:#fff}.eva-input .eva-input__icon{pointer-events:none;display:block;position:absolute;top:12px;right:12px;font-size:24px;fill:#8f9bb3;transition:.15s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVueEvaInput(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('EvaInput', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
