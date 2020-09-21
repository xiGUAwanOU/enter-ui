<template>
  <div
    class="e-checkbox-group"
    :class="[
      { 'e-checkbox-group--horizontal': horizontal },
      `e-checkbox-group--visual-type-${visualType}`,
    ]"
  >
    <div class="e-checkbox-group__choices">
      <div v-for="choice in choices" :key="choice.key" class="e-checkbox-group__choice">
        <e-checkbox
          :disabled="disabled || choice.disabled"
          :size="size"
          :visual-type="visualType"
          :value="choice.key"
          v-model="inputValue"
        >{{ choice.label }}</e-checkbox>
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
  name: 'ECheckboxGroup',

  props: {
    modelValue: { type: Array as PropType<string[]>, required: true },
    choices: { type: Array as PropType<ChoiceOption[]>, required: true },
    horizontal: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
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
