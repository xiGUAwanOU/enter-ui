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
    <e-text-input placeholder="Text input" />
    <br />
    <br />
    <e-text-input placeholder="Text input" size="medium" visual-type="primary" />
    <br />
    <br />
    <e-text-input placeholder="Text input" size="large" visual-type="danger" />
    <br />
    <br />
    <e-text-input disabled placeholder="Text input" />
    <br />
    <br />
    <e-multiline-input placeholder="Multiline input" />
    <br />
    <br />
    <e-multiline-input placeholder="Multiline input" size="medium" visual-type="primary" />
    <br />
    <br />
    <e-multiline-input placeholder="Multiline input" size="large" visual-type="danger" />
    <br />
    <br />
    <e-multiline-input disabled placeholder="Multiline input" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const booleanValue = ref(false);

    return {
      booleanValue,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
