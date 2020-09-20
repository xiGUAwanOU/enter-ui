<template>
  <div
    class="e-checkbox-group"
    :class="[
      { 'e-checkbox-group--horizontal': horizontal },
      `e-checkbox-group--visual-type-${visualType}`,
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
      <div v-for="(choice, key) in filteredChoices" :key="key" class="e-checkbox-group__choice">
        <e-checkbox
          :disabled="disabled || choice.disabled"
          :size="size"
          :visual-type="visualType"
          :value="key"
          v-model="inputValue"
        >{{ choice.label }}</e-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

interface ChoiceOption {
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
    choices: { type: Object as PropType<ChoiceOption>, required: true },
    disabled: { type: Boolean, default: false },
    filtered: { type: Boolean, default: false },
    filterPlaceholder: { type: String, default: '' },
    horizontal: { type: Boolean, default: false },
    size: { type: String as PropType<ComponentSize>, default: 'small' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const filterText = ref('');

    const filteredChoices = computed(() => {
      const result: ChoiceOption = {};
      for (const [ key, choice ] of Object.entries(props.choices)) {
        if (choice.label.toLocaleLowerCase().includes(filterText.value.toLocaleLowerCase())) {
          result[key] = choice;
        }
      }
      return result;
    });

    const inputValue = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        ctx.emit('update:modelValue', newValue);
      },
    });

    return {
      filterText,
      filteredChoices,
      inputValue,
    };
  },
});
</script>
