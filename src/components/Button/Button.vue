<template>
  <button
    class="e-button"
    :class="[
      `e-button--visual-type-${visualType}`,
      `e-button--size-${size}`,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'EButton',

  props: {
    disabled: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    function handleClick() {
      ctx.emit('click');
    }

    return {
      handleClick,
    };
  },
});
</script>
