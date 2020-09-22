<template>
  <div class="test-app">
    <e-button size="small" visual-type="default" @click="eventHandler">Hello</e-button>
    <br />
    <br />
    <e-button size="medium" visual-type="primary" @click="eventHandler">Hello</e-button>
    <br />
    <br />
    <e-button size="large" visual-type="danger" @click="eventHandler">Hello</e-button>
    <br />
    <br />
    <e-button disabled @click="eventHandler">Hello</e-button>
    <br />
    <br />
    <e-text-input
      placeholder="Text input"
      size="small"
      visual-type="default"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-text-input
      placeholder="Text input"
      size="medium"
      visual-type="primary"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-text-input placeholder="Text input" size="large" visual-type="danger" v-model="stringValue" />
    <br />
    <br />
    <e-text-input disabled placeholder="Text input" v-model="stringValue" />
    <br />
    <br />
    <e-number-input
      placeholder="Number input"
      :fractional-digits="2"
      size="small"
      visual-type="default"
      v-model="numberValue"
    />
    <br />
    <br />
    <e-number-input
      placeholder="Number input"
      :fractional-digits="2"
      size="medium"
      visual-type="primary"
      v-model="numberValue"
    />
    <br />
    <br />
    <e-number-input
      placeholder="Number input"
      :fractional-digits="2"
      size="large"
      visual-type="danger"
      v-model="numberValue"
    />
    <br />
    <br />
    <e-number-input
      disabled
      placeholder="Number input"
      :fractional-digits="2"
      v-model="numberValue"
    />
    <br />
    <br />
    <e-multiline-input
      placeholder="Multiline input"
      rows="5"
      size="small"
      visual-type="default"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-multiline-input
      placeholder="Multiline input"
      rows="5"
      size="medium"
      visual-type="primary"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-multiline-input
      placeholder="Multiline input"
      rows="5"
      size="large"
      visual-type="danger"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-multiline-input disabled placeholder="Multiline input" rows="5" v-model="stringValue" />
    <br />
    <br />
    <e-checkbox value="one" size="small" visual-type="default" v-model="checkboxValues">One</e-checkbox>
    <br />
    <e-checkbox value="two" size="medium" visual-type="primary" v-model="checkboxValues">Two</e-checkbox>
    <br />
    <e-checkbox value="three" size="large" visual-type="danger" v-model="checkboxValues">Three</e-checkbox>
    <br />
    <e-checkbox value="four" disabled v-model="checkboxValues">Four</e-checkbox>
    <br />
    <br />
    <e-checkbox-group
      class="whatever-input"
      :choices="choices"
      filtered
      filter-placeholder="Filter"
      size="small"
      visual-type="default"
      v-model="checkboxValues"
    />
    <br />
    <br />
    <e-checkbox-group
      :choices="choices"
      horizontal
      size="medium"
      visual-type="primary"
      v-model="checkboxValues"
    />
    <br />
    <br />
    <e-checkbox-group
      :choices="choices"
      horizontal
      size="large"
      visual-type="danger"
      v-model="checkboxValues"
    />
    <br />
    <br />
    <e-checkbox-group :choices="choices" horizontal disabled v-model="checkboxValues" />
    <br />
    <br />
    <e-radio value="one" size="small" visual-type="default" v-model="radioValue">One</e-radio>
    <br />
    <e-radio value="two" size="medium" visual-type="primary" v-model="radioValue">Two</e-radio>
    <br />
    <e-radio value="three" size="large" visual-type="danger" v-model="radioValue">Three</e-radio>
    <br />
    <e-radio value="four" disabled v-model="radioValue">Four</e-radio>
    <br />
    <br />
    <e-radio-group :choices="choices" size="small" visual-type="default" v-model="radioValue" />
    <br />
    <br />
    <e-radio-group
      :choices="choices"
      size="medium"
      visual-type="primary"
      horizontal
      v-model="radioValue"
    />
    <br />
    <br />
    <e-radio-group
      :choices="choices"
      size="large"
      visual-type="danger"
      horizontal
      v-model="radioValue"
    />
    <br />
    <br />
    <e-radio-group :choices="choices" horizontal v-model="radioValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    function eventHandler(event: any) {
      console.log('Event: ' + event);
    }

    const booleanValue = ref(false);

    const stringValue = ref('');

    const numberValue = ref(NaN);

    const choices = [
      { key: 'one', label: 'First choice' },
      { key: 'two', label: 'Second choice' },
      { key: 'three', label: 'Thrid choice' },
      { key: 'four', label: 'Fourth choice' },
      { key: 'five', label: 'Fifth choice' },
      { key: 'six', label: 'Sixth choice' },
      { key: 'seven', label: 'Seventh choice' },
      { key: 'eight', label: 'Eighth choice' },
      { key: 'nine', label: 'Ninth choice' },
    ];
    const checkboxValues = ref([ 'one' ]);
    const radioValue = ref('one');

    return {
      eventHandler,
      booleanValue,
      stringValue,
      numberValue,
      choices,
      checkboxValues,
      radioValue,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
