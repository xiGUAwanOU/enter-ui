<template>
  <label
    class="e-checkbox"
    :class="[
      `e-checkbox--visual-type-${visualType}`,
      `e-checkbox--size-${size}`,
    ]"
  >
    <input class="e-checkbox__hidden" type="checkbox" :disabled="disabled" v-model="inputValue" />
    <span class="e-checkbox__box">
      <svg v-if="modelValue" class="e-checkbox__box-tick" width="14" height="14">
        <polyline points="2,7 5,10 12,3" />
      </svg>
    </span>
    <span class="e-checkbox__label">
      <slot name />
      <slot v-if="modelValue" name="true-content" />
      <slot v-else name="false-content" />
    </span>
  </label>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ECheckbox',

  props: {
    modelValue: { type: Boolean, required: true },
    disabled: { type: Boolean, default: false },
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
