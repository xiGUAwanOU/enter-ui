<template>
  <div
    class="e-input"
    :class="[
      `e-input--visual-type-${visualType}`,
      `e-input--size-${size}`,
    ]"
  >
    <input
      class="e-input__inner"
      :type="hideContent ? 'password' : 'text'"
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
    modelValue: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    hideContent: { type: Boolean, default: false },
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
