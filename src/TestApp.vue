<template>
  <div class="test-app">
    <e-button>Hello</e-button>
    <br />
    <br />
    <e-button size="medium" visual-type="primary">Hello</e-button>
    <br />
    <br />
    <e-button size="large" visual-type="danger">Hello</e-button>
    <br />
    <br />
    <e-button disabled>Hello</e-button>
    <br />
    <br />
    <e-checkbox v-model="booleanValue">Something</e-checkbox>
    <br />
    <br />
    <e-checkbox v-model="booleanValue" size="medium" visual-type="primary">Something</e-checkbox>
    <br />
    <br />
    <e-checkbox v-model="booleanValue" size="large" visual-type="danger">Something</e-checkbox>
    <br />
    <br />
    <e-checkbox v-model="booleanValue" disabled>Something</e-checkbox>
    <br />
    <br />
    <e-text-input placeholder="Text input" size="small" v-model="stringValue" />
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
    <e-text-input disabled placeholder="Text input" size="small" v-model="stringValue" />
    <br />
    <br />
    <e-multiline-input placeholder="Multiline input" v-model="stringValue" />
    <br />
    <br />
    <e-multiline-input
      placeholder="Multiline input"
      size="medium"
      visual-type="primary"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-multiline-input
      placeholder="Multiline input"
      size="large"
      visual-type="danger"
      v-model="stringValue"
    />
    <br />
    <br />
    <e-multiline-input disabled placeholder="Multiline input" v-model="stringValue" />
    <br />
    <br />
    <e-checkbox-group
      :choices="checkboxGroupChoices"
      horizontal
      size="small"
      v-model="stringValues"
    />
    <br />
    <br />
    <e-checkbox-group
      :choices="checkboxGroupChoices"
      horizontal
      size="medium"
      visual-type="primary"
      v-model="stringValues"
    />
    <br />
    <br />
    <e-checkbox-group
      :choices="checkboxGroupChoices"
      horizontal
      size="large"
      visual-type="danger"
      v-model="stringValues"
    />
    <br />
    <br />
    <e-checkbox-group
      :choices="checkboxGroupChoices"
      horizontal
      disabled
      size="small"
      v-model="stringValues"
    />
    <br />
    <br />
    <e-checkbox value="one" v-model="stringValues">One</e-checkbox>
    <br />
    <e-checkbox value="two" v-model="stringValues">Two</e-checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const booleanValue = ref(false);

    const stringValue = ref('');

    const checkboxGroupChoices = {
      one: { label: 'First choice' },
      two: { label: 'Second choice' },
      three: { label: 'Third choice' },
      four: { label: 'Fourth choice' },
      five: { label: 'Fifth choice' },
      six: { label: 'Sixth choice' },
    };
    const stringValues = ref([ 'one' ]);

    return {
      booleanValue,
      stringValue,
      checkboxGroupChoices,
      stringValues,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
