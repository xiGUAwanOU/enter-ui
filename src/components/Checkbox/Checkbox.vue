<template>
  <label
    class="e-checkbox"
    :class="[
      `e-checkbox--visual-type-${visualType}`,
      `e-checkbox--size-${size}`,
    ]"
  >
    <input class="e-checkbox__hidden" type="checkbox" v-bind="$attrs" v-model="inputValue" />
    <span class="e-checkbox__box">
      <svg class="e-checkbox__tick" width="14" height="14">
        <polyline points="2,7.5 5,10.5 12,3.5" />
      </svg>
    </span>
    <span class="e-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ECheckbox',

  inheritAttrs: false,

  props: {
    modelValue: { type: [ Boolean, Array ], required: true },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
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
