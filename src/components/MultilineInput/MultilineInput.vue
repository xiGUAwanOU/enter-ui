<template>
  <textarea
    class="e-multiline-input"
    :class="[
      `e-multiline-input--visual-type-${visualType}`,
      `e-multiline-input--size-${size}`,
    ]"
    :style="{ 'resize': resize }"
    v-bind="$attrs"
    v-model="inputValue"
  />
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

type ResizeValue = 'both' | 'vertical' | 'horizontal' | 'none';

export default defineComponent({
  name: 'EMultilineInput',

  inheritAttrs: false,

  props: {
    modelValue: { type: String, required: true },
    resize: { type: String as PropType<ResizeValue>, default: 'none' },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        ctx.emit('update:modelValue', value);
      },
    });

    return {
      inputValue,
    };
  },
});
</script>
