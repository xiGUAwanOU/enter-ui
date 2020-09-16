<template>
  <input
    class="e-input"
    :class="[
      `e-input--visual-type-${visualType}`,
      `e-input--size-${size}`,
    ]"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="stringValue"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script lang="ts">
import { PropType, defineComponent, ref, watch } from 'vue';

import { ActionVisualType, ComponentSize } from '@/components/Shared/Common.types';

export default defineComponent({
  name: 'ENumberInput',

  props: {
    modelValue: { type: Number, required: true },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    fractionalDigits: { type: Number },
    decimalSeparator: { type: String, default: '.' },
    groupingSeparator: { type: String, default: ',' },
    size: { type: String as PropType<ComponentSize>, default: 'medium' },
    visualType: { type: String as PropType<ActionVisualType>, default: 'default' },
  },

  setup(props, ctx) {
    const stringValue = ref('');

    function sanitizeStringValue(stringValue: string, integerGroupingFunction: (integerPart: string) => string) {
      let value = stringValue;

      const isNegative = value.startsWith('-');

      if (isNegative) {
        value = value.substring(1);
      }

      const parts = value.split(props.decimalSeparator);
      let integerPart = parts[0];

      integerPart = integerGroupingFunction(integerPart);

      let fractionalPart = parts[1];
      if (
        fractionalPart === undefined ||
        (props.fractionalDigits !== undefined && props.fractionalDigits === 0)
      ) {
        return `${isNegative ? '-' : ''}${integerPart}`;
      }

      fractionalPart = fractionalPart.replaceAll(/\D/g, '');

      if (props.fractionalDigits !== undefined) {
        fractionalPart = fractionalPart.substring(0, props.fractionalDigits);
      }

      if (integerPart.endsWith(props.groupingSeparator)) {
        integerPart = integerPart.substring(0, integerPart.length - 1);
      }

      return `${isNegative ? '-' : ''}${integerPart}${props.decimalSeparator}${fractionalPart}`;
    }

    function keepGrouping(integerPart: string): string {
      return integerPart
        .split(props.groupingSeparator)
        .map((numberGroup) => numberGroup.replaceAll(/\D/g, ''))
        .join(props.groupingSeparator)
        .replaceAll(props.groupingSeparator + props.groupingSeparator, props.groupingSeparator);
    }

    function thousandsGrouping(integerPart: string): string {
      const integerPartWithoutGrouping = integerPart.replaceAll(props.groupingSeparator, '');
      let groupedIntegerPart = '';
      for (let i = 0; i < integerPartWithoutGrouping.length; i++) {
        groupedIntegerPart += integerPartWithoutGrouping.charAt(i);

        const indexFromBack = integerPartWithoutGrouping.length - 1 - i;
        if (indexFromBack % 3 === 0 && indexFromBack !== 0) {
          groupedIntegerPart += props.groupingSeparator;
        }
      }

      return groupedIntegerPart;
    }

    function onInput(event: Event) {
      stringValue.value = (event.target as HTMLInputElement).value;
      stringValue.value = sanitizeStringValue(stringValue.value, keepGrouping);
    }

    function onBlur(event: Event) {
      const newStringValue = (event.target as HTMLInputElement).value;

      if (newStringValue === '') {
        ctx.emit('update:modelValue', NaN);
        return;
      }

      console.log(newStringValue);

      ctx.emit('update:modelValue', Number(newStringValue
        .replaceAll(props.groupingSeparator, '')
        .replaceAll(props.decimalSeparator, '.')));
    }

    watch(() => props.modelValue, () => {
      if (Number.isNaN(props.modelValue)) {
        stringValue.value = '';
        return;
      }

      let stringModelValue = new Intl.NumberFormat('en-US', {
        useGrouping: false,
        maximumFractionDigits: 20,
      }).format(props.modelValue);
      stringModelValue = stringModelValue.replaceAll('.', props.decimalSeparator);

      stringValue.value = sanitizeStringValue(stringModelValue, thousandsGrouping);
    });

    return {
      stringValue,
      onInput,
      onBlur,
    };
  },
});

</script>
