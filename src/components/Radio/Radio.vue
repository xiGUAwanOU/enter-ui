<template>
  <label
    class="e-radio"
    :class="[
      `e-radio--visual-type-${visualType}`,
      `e-radio--size-${size}`,
    ]"
  >
    <input
      class="e-radio__hidden"
      type="radio"
      :disabled="disabled"
      :value="value"
      v-model="inputValue"
    />
    <span class="e-radio__circle">
      <svg v-if="selected" class="e-radio__dot" width="14" height="14">
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

  props: {
    modelValue: { type: String, required: true },
    value: { type: String },
    disabled: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const selected = computed(() => props.modelValue === props.value);

    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        ctx.emit('update:modelValue', value);
      },
    });

    return {
      selected,
      inputValue,
    };
  },
});
</script>
