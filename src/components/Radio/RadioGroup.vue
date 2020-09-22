<template>
  <div
    class="e-radio-group"
    :class="[
      { 'e-radio-group--horizontal': horizontal },
      `e-radio-group--visual-type-${visualType}`,
    ]"
  >
    <div class="e-radio-group__choices">
      <div v-for="(choice, key) in choices" :key="key" class="e-radio-group__choice">
        <e-radio
          :disabled="disabled || choice.disabled"
          :size="size"
          :visual-type="visualType"
          :value="choice.key"
          v-model="inputValue"
        >{{ choice.label }}</e-radio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export interface ChoiceOption {
  key: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'ERadioGroup',

  props: {
    modelValue: { type: String, required: true },
    choices: { type: Object as PropType<ChoiceOption>, required: true },
    disabled: { type: Boolean, default: false },
    horizontal: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        ctx.emit('update:modelValue', newValue);
      },
    });

    return {
      inputValue,
    };
  },
});
</script>
