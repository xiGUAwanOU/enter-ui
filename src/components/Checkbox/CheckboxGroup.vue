<template>
  <div
    class="e-checkbox-group"
    :class="[
      { 'e-checkbox-group--horizontal': horizontal },
      `e-checkbox-group--visual-type-${visualType}`
    ]"
  >
    <e-text-input
      v-if="filtered"
      class="e-checkbox-list__filter"
      :placeholder="filterPlaceholder"
      :disabled="disabled"
      :size="size"
      :visual-type="visualType"
      v-model="filterText"
    />
    <div class="e-checkbox-group__choice-wrapper">
      <div v-for="(choice, key) in filteredOptions" :key="key" class="e-checkbox-group__choice">
        <e-checkbox
          :disabled="disabled || choice.disabled"
          :size="size"
          :visual-type="visualType"
          :model-value="modelValue.includes(key)"
          @update:modelValue="toggleValue(key, $event)"
        >{{ choice.label }}</e-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

interface Options {
  [key: string]: {
    label: string;
    value: string;
    disabled?: boolean;
  };
}

export default defineComponent({
  name: 'ECheckboxGroup',

  props: {
    modelValue: { type: Array as PropType<string[]>, required: true },
    options: { type: Object as PropType<Options>, required: true },
    disabled: { type: Boolean, default: false },
    filtered: { type: Boolean, default: false },
    filterPlaceholder: { type: String, default: '' },
    horizontal: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const filterText = ref('');

    const filteredOptions = computed(() => {
      const result: Options = {};
      for (const [ key, choice ] of Object.entries(props.options)) {
        if (choice.label.toLocaleLowerCase().includes(filterText.value.toLocaleLowerCase())) {
          result[key] = choice;
        }
      }
      return result;
    });

    function toggleValue(key: string, value: boolean) {
      if (value) {
        ctx.emit('update:modelValue', [ ...props.modelValue, key ]);
      } else {
        ctx.emit('update:modelValue', props.modelValue.filter((selected) => selected !== key));
      }
    }

    return {
      filterText,
      filteredOptions,
      toggleValue,
    };
  },
});
</script>
