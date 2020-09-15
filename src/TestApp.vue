<template>
  <e-text-input placeholder="Type something here..." v-model="value" />
  <e-button>Search</e-button>
  <br />
  <br />
  <e-text-input visual-type="primary" placeholder="Type something here..." v-model="value" />
  <e-button visual-type="primary">Search</e-button>
  <br />
  <br />
  <e-text-input visual-type="danger" placeholder="Type something here..." v-model="value" />
  <e-button visual-type="danger">Search</e-button>
  <br />
  <br />
  <e-text-input size="small" placeholder="Small" v-model="value" />
  <e-text-input size="medium" placeholder="Medium" v-model="value" />
  <e-text-input size="large" placeholder="Large" v-model="value" />
  <br />
  <br />
  <span>Mindestens&nbsp;</span>
  <e-number-input
    placeholder="Minimum Beitrag"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
  <span>Euro</span>
  <br />
  <br />
  <span>Mindestens&nbsp;</span>
  <e-number-input
    placeholder="Minimum Beitrag"
    visual-type="primary"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
  <span>Euro</span>
  <br />
  <br />
  <span>Mindestens&nbsp;</span>
  <e-number-input
    placeholder="Minimum Beitrag"
    visual-type="danger"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
  <span>Euro</span>

  <br />
  <br />
  <e-number-input
    placeholder="Minimum Beitrag"
    size="small"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
  <e-number-input
    placeholder="Minimum Beitrag"
    size="medium"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
  <e-number-input
    placeholder="Minimum Beitrag"
    size="large"
    grouping-separator="."
    decimal-separator=","
    v-model="numberValue"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const numberValue = ref(NaN);
    return {
      value,
      numberValue,
    };
  },
});
</script>
