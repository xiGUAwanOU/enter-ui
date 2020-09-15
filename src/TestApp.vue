<template>
  <div></div>
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
