<template>
  <button
    class="e-button"
    :class="[
      `e-button--visual-type-${visualType}`,
      `e-button--size-${size}`,
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'EButton',

  inheritAttrs: false,

  props: {
    size: { type: String as PropType<ComponentSize>, default: 'small' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },
});
</script>
