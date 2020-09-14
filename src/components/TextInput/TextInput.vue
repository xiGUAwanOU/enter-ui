<template>
  <div
    class="e-text-input"
    :class="[
      `e-text-input--visual-type-${visualType}`,
      `e-text-input--size-${size}`,
    ]"
  >
    <input
      class="e-text-input__inner"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ETextInput',

  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: '' },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        ctx.emit('input', value);
      },
    });

    return {
      inputValue,
    };
  },
});
</script>
