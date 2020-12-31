'use strict';Object.defineProperty(exports,'__esModule',{value:true});var eva=require('eva-icons');//
var script = {
  name: 'EvaInput',
  inheritAttrs: false,
  props: {
    focusPlaceholder: {
      type: String,
      default: 'Typing...'
    },
    placeholder: String,
    primary: Boolean,
    readonly: Boolean,
    status: String,
    suffixIcon: String,
    value: [String, Number]
  },
  data: function data() {
    return {
      isFocus: false,
      stringValue: null
    };
  },
  computed: {
    listeners: function listeners() {
      var listeners = Object.assign({}, this.$listeners);
      delete listeners.blur;
      delete listeners.focus;
      delete listeners.input;
      return listeners;
    },
    stringPlaceholder: function stringPlaceholder() {
      if (this.isFocus) {
        return this.focusPlaceholder;
      } else {
        return this.placeholder || '';
      }
    }
  },
  watch: {
    value: {
      handler: function handler() {
        this.handleInput(this.value);
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    eva.replace();
  },
  methods: {
    handleBlur: function handleBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },
    handleFocus: function handleFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    handleInput: function handleInput(e) {
      var _value = e;
      this.stringValue = _value || null;
      this.$emit('input', _value || null);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "eva-input"
  }, [_vm._ssrNode("<input" + _vm._ssrAttr("placeholder", _vm.stringPlaceholder) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.stringValue) + _vm._ssrAttrs(_vm.$attrs) + _vm._ssrClass("eva-input__inner", [{
    'has-icon': _vm.suffixIcon,
    'is-danger': _vm.status === 'danger',
    'is-focus': _vm.isFocus,
    'is-info': _vm.status === 'info',
    'is-primary': _vm.primary,
    'is-success': _vm.status === 'success',
    'is-warning': _vm.status === 'warning'
  }]) + "> <i" + _vm._ssrAttr("data-eva", _vm.suffixIcon) + " class=\"eva-input__icon\"></i>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2d1700e4_0", {
    source: ".eva-input{box-sizing:border-box;display:inline-block;position:relative;width:343px}.eva-input .eva-input__inner{box-sizing:border-box;display:block;height:48px;width:100%;padding:0 16px;font-size:15px;font-weight:600;line-height:24px;color:#222b45;background:#f7f9fc;background-image:none;border:1px solid #e4e9f2;border-radius:12px;white-space:nowrap;text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;overflow:hidden;box-shadow:none;transition:.15s}.eva-input .eva-input__inner::placeholder{font-weight:400;color:#8f9bb3}.eva-input .eva-input__inner:focus{background:#fff}.eva-input .eva-input__inner:focus::placeholder{color:#222b45}.eva-input .eva-input__inner:hover:not(:disabled){background:#edf1f7}.eva-input .eva-input__inner.has-icon{padding-right:48px}.eva-input .eva-input__inner:disabled{cursor:not-allowed;border:1px solid #e4e9f2}.eva-input .eva-input__inner:disabled::placeholder{color:rgba(143,155,179,.48)}.eva-input .eva-input__inner:disabled~.eva-input__icon{fill:rgba(143,155,179,.4)}.eva-input .eva-input__inner.is-primary{color:#fff;background:rgba(255,255,255,.24);border-color:rgba(255,255,255,.4)}.eva-input .eva-input__inner.is-primary::placeholder{color:#fff}.eva-input .eva-input__inner.is-primary:focus{border-color:#fff;background:rgba(255,255,255,.32)}.eva-input .eva-input__inner.is-primary:hover:not(:disabled){border-color:#fff;background:rgba(255,255,255,.32)}.eva-input .eva-input__inner.is-primary:disabled{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.16)}.eva-input .eva-input__inner.is-primary~.eva-input__icon{fill:#fff}.eva-input .eva-input__inner.is-primary~.eva-input__icon.is-disabled{fill:rgba(228,233,242,.4)}.eva-input .eva-input__inner.is-danger{border-color:#ff3d71}.eva-input .eva-input__inner.is-danger~.eva-input__icon{fill:#ff3d71}.eva-input .eva-input__inner.is-info{border-color:#0095ff}.eva-input .eva-input__inner.is-info~.eva-input__icon{fill:#0095ff}.eva-input .eva-input__inner.is-success{border-color:#00e096}.eva-input .eva-input__inner.is-success~.eva-input__icon{fill:#00e096}.eva-input .eva-input__inner.is-warning{border-color:#fa0}.eva-input .eva-input__inner.is-warning~.eva-input__icon{fill:#fa0}.eva-input .eva-input__inner.is-focus{border-color:#36f!important}.eva-input .eva-input__inner.is-focus::placeholder{font-weight:600}.eva-input .eva-input__inner.is-focus~.eva-input__icon{fill:#36f}.eva-input .eva-input__inner.is-focus~.eva-input__icon.is-primary{fill:#fff}.eva-input .eva-input__icon{pointer-events:none;display:block;position:absolute;top:12px;right:12px;font-size:24px;fill:#8f9bb3;transition:.15s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-2d1700e4";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var install = function installVueEvaInput(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('EvaInput', __vue_component__);
};

var plugin = {
  install: install
}; // eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

__vue_component__.install = install;exports.default=__vue_component__;