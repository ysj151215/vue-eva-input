<template>
  <div class="eva-input">
    <input
      class="eva-input__inner"
      v-bind="$attrs"
      :class="[{
        'is-danger': status === 'danger',
        'is-focus': isFocus,
        'is-info': status === 'info',
        'is-success': status === 'success',
        'is-warning': status === 'warning'
      }]"
      :disabled="disabled"
      :placeholder="stringPlaceholder"
      :readonly="readonly"
      :tabindex="tabindex"
      :type="type"
      :value="stringValue"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
      @keypress="handleKeypress"
    />
  </div>
</template>

<script>
export default {
  name: "EvaButton",
  inheritAttrs: false,
  props: {
    autocomplete: { type: String, default: "off" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    focusPlaceholder: { type: String, default: "Typing..." },
    numberOnly: { type: Boolean, default: false },
    placeholder: { type: String, default: "Placeholder" },
    readonly: Boolean,
    status: { type: String, default: "success" },
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
  methods: {
    handleBlur(e) {
      this.isFocus = false;
      this.$emit("blur", e);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleFocus(e) {
      this.isFocus = true;
      this.$emit("focus", e);
    },
    handleInput(e) {
      let _value = e.target.value;
      this.stringValue = _value || null;
      this.$emit("input", _value || null);
    },
    handleKeypress() {}
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");

$--color-basic-100: #ffffff;
$--color-basic-200: #f7f9fc;
$--color-basic-300: #edf1f7;
$--color-basic-400: #e4e9f2;
$--color-basic-500: #c5cee0;
$--color-basic-600: #8f9bb3;
$--color-basic-700: #2e3a59;
$--color-basic-800: #222b45;
$--color-basic-900: #192038;
$--color-basic-1000: #151a30;
$--color-basic-1100: #101426;
$--color-danger-500: #ff3d71;
$--color-info-500: #0095ff;
$--color-primary-500: #3366ff;
$--color-success-500: #00e096;
$--color-warning-500: #ffaa00;

.eva-input {
  box-sizing: border-box;
  display: inline-block;

  #{&}__inner {
    display: block;
    height: 48px;
    width: 343px;
    padding: 0 16px;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    color: $--color-basic-800;
    background: $--color-basic-200;
    border: 1px solid $--color-basic-400;
    border-radius: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    outline: 0;
    overflow: hidden;
    transition: 0.15s;

    &::placeholder {
      font-weight: normal;
      color: $--color-basic-600;
    }
    &:focus {
      background: $--color-basic-100;

      &::placeholder {
        color: $--color-basic-800;
      }
    }
    &:hover:not(:disabled) {
      background: $--color-basic-300;
    }
    &.is-danger {
      border-color: $--color-danger-500;
    }
    &.is-focus {
      border-color: $--color-primary-500 !important;

      &::placeholder {
        font-weight: 600;
      }
    }
    &.is-info {
      border-color: $--color-info-500;
    }
    &.is-success {
      border-color: $--color-success-500;
    }
    &.is-warning {
      border-color: $--color-warning-500;
    }
    &:disabled {
      cursor: not-allowed;
      border: 1px solid $--color-basic-400;

      &::placeholder {
        color: rgba($--color-basic-600, 0.48);
      }
    }
  }
}
</style>
