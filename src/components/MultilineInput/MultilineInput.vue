<template>
  <textarea
    class="e-multiline-input"
    :class="[
      `e-multiline-input--visual-type-${visualType}`,
      `e-multiline-input--size-${size}`,
    ]"
    :style="{ 'resize': resize }"
    :rows="rows"
    :disabled="disabled"
    :placeholder="placeholder"
    v-model="inputValue"
  />
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

type ResizeValue = 'both' | 'vertical' | 'horizontal' | 'none';

export default defineComponent({
  name: 'EMultilineInput',

  props: {
    modelValue: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    resize: { type: String as PropType<ResizeValue>, default: 'none' },
    rows: { type: Number, default: 5 },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
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
