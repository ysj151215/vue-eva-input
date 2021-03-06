<template>
  <div class="eva-input">
    <input
      class="eva-input__inner"
      v-bind="$attrs"
      :class="[
        {
          'has-icon': suffixIcon,
          'is-danger': status === 'danger',
          'is-focus': isFocus === true,
          'is-info': status === 'info',
          'is-primary': primary === true,
          'is-success': status === 'success',
          'is-warning': status === 'warning'
        }
      ]"
      :placeholder="stringPlaceholder"
      :readonly="readonly"
      :value="stringValue"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput($event.target.value)"
    />

    <i class="eva-input__icon" :data-eva="suffixIcon" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch, onMounted } from 'vue'
import { InputStatus } from './types'
import * as eva from 'eva-icons'

export default defineComponent({
  name: 'EvaInput',
  inheritAttrs: false,
  props: {
    focusPlaceholder: { type: String, default: 'Typing...' },
    modelValue: { type: [String, Number], default: '' },
    placeholder: { type: String, default: '' },
    primary: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    status: { type: String as PropType<InputStatus>, default: null },
    suffixIcon: { type: String, default: null }
  },
  setup(props, { emit }) {
    let isFocus = ref(false)
    let stringValue = ref('')

    const stringPlaceholder = computed(() => {
      if (isFocus.value === true) {
        return props.focusPlaceholder
      } else {
        return props.placeholder || ''
      }
    })

    const handleBlur = (e: FocusEvent) => {
      isFocus.value = false
      emit('blur', e)
    }

    const handleFocus = (e: FocusEvent) => {
      isFocus.value = true
      emit('focus', e)
    }

    const handleInput = (e: string | number) => {
      if (e !== null) {
        stringValue.value = e.toString()
        emit('update:modelValue', e.toString())
      } else {
        emit('update:modelValue', null)
      }
    }

    watch(
      () => props.modelValue,
      () => handleInput(props.modelValue),
      { immediate: true }
    )

    /**
     * Call eva.replace() to replace all elements with the data-eva data attribute with SVG elements.
     * {@link https://github.com/akveo/eva-icons#javascript GitHub}.
     */
    onMounted(() => eva.replace())

    return {
      isFocus,
      handleBlur,
      handleFocus,
      handleInput,
      stringPlaceholder,
      stringValue
    }
  }
})
</script>

<style lang="scss" scoped>
$--color-basic-100: #ffffff;
$--color-basic-200: #f7f9fc;
$--color-basic-300: #edf1f7;
$--color-basic-400: #e4e9f2;
$--color-basic-500: #c5cee0;
$--color-basic-600: #8f9bb3;
$--color-basic-700: #2e3a59;
$--color-basic-800: #222b45;
$--color-danger-500: #ff3d71;
$--color-info-500: #0095ff;
$--color-primary-500: #3366ff;
$--color-success-500: #00e096;
$--color-warning-500: #ffaa00;

.eva-input {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 343px;

  .eva-input__inner {
    box-sizing: border-box;
    display: block;
    height: 48px;
    width: 100%;
    padding: 0 16px;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    color: $--color-basic-800;
    background: $--color-basic-200;
    background-image: none;
    border: 1px solid $--color-basic-400;
    border-radius: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    overflow: hidden;
    box-shadow: none;
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
    &.has-icon {
      padding-right: 48px;
    }
    &:disabled {
      cursor: not-allowed;
      border: 1px solid $--color-basic-400;

      &::placeholder {
        color: rgba($--color-basic-600, 0.48);
      }

      ~ .eva-input__icon {
        fill: rgba($--color-basic-600, 0.4);
      }
    }

    &.is-primary {
      color: $--color-basic-100;
      background: rgba($--color-basic-100, 0.24);
      border-color: rgba($--color-basic-100, 0.4);

      &::placeholder {
        color: $--color-basic-100;
      }
      &:focus {
        border-color: $--color-basic-100;
        background: rgba($--color-basic-100, 0.32);
      }
      &:hover:not(:disabled) {
        border-color: $--color-basic-100;
        background: rgba($--color-basic-100, 0.32);
      }
      &:disabled {
        border-color: rgba($--color-basic-100, 0.4);
        background: rgba($--color-basic-100, 0.16);
      }

      ~ .eva-input__icon {
        fill: $--color-basic-100;

        &.is-disabled {
          fill: rgba($--color-basic-400, 0.4);
        }
      }
    }

    &.is-danger {
      border-color: $--color-danger-500;

      ~ .eva-input__icon {
        fill: $--color-danger-500;
      }
    }
    &.is-info {
      border-color: $--color-info-500;

      ~ .eva-input__icon {
        fill: $--color-info-500;
      }
    }
    &.is-success {
      border-color: $--color-success-500;

      ~ .eva-input__icon {
        fill: $--color-success-500;
      }
    }
    &.is-warning {
      border-color: $--color-warning-500;

      ~ .eva-input__icon {
        fill: $--color-warning-500;
      }
    }
    &.is-focus {
      border-color: $--color-primary-500 !important;

      &::placeholder {
        font-weight: 600;
      }

      ~ .eva-input__icon {
        fill: $--color-primary-500;

        &.is-primary {
          fill: $--color-basic-100;
        }
      }
    }
  }

  .eva-input__icon {
    pointer-events: none;
    display: block;
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 24px;
    fill: $--color-basic-600;
    transition: 0.15s;
  }
}
</style>
