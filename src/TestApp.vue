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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    return {
      value,
    };
  },
});
</script>
