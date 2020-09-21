<template>
  <label
    class="e-radio"
    :class="[
      `e-radio--visual-type-${visualType}`,
      `e-radio--size-${size}`,
    ]"
  >
    <input class="e-radio__hidden" type="radio" v-bind="$attrs" v-model="inputValue" />
    <span class="e-radio__circle">
      <svg class="e-radio__dot" width="14" height="14">
        <circle cx="7" cy="7" r="3" />
      </svg>
    </span>
    <span class="e-radio__label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ERadio',

  inheritAttrs: false,

  props: {
    modelValue: { type: String, required: true },
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
