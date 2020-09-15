<template>
  <div class="test-app">
    <div>
      <e-button visual-type="primary">Primary</e-button>
      <e-button>Default</e-button>
    </div>

    <div>
      <e-text-input placeholder="Text input" v-model="textValue" />
      <e-text-input placeholder="Password input" hide-content v-model="passwordValue" />
      <e-number-input placeholder="Number input" v-model="numberValue" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const textValue = ref('');
    const passwordValue = ref('');
    const numberValue = ref(NaN);

    return {
      textValue,
      passwordValue,
      numberValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.test-app > div {
  margin-bottom: 10px;
}
</style>
