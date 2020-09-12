<template>
  <button
    class="e-button"
    :class="{
      [`e-button--visual-type-${visualType}`]: true,
      [`e-button--size-${size}`]: true,
      'e-button--outlined': outlined,
    }"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

import { ComponentSize, VisualType } from '@/components/Common/Common.types';

export default defineComponent({
  name: 'EButton',

  props: {
    disabled: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<VisualType>, default: 'default' },
    outlined: { type: Boolean, default: false },
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
