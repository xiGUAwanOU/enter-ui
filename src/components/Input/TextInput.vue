<template>
  <input
    class="e-input"
    :class="[
      `e-input--visual-type-${visualType}`,
      `e-input--size-${size}`,
    ]"
    :type="hideContent ? 'password' : 'text'"
    v-bind="$attrs"
    v-model="inputValue"
  />
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ETextInput',

  inheritAttrs: false,

  props: {
    modelValue: { type: String, required: true },
    hideContent: { type: Boolean, default: false },
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
