import { Plugin } from 'vue';

import Button from '@/components/Button/Button.vue';

export default {
  install(app) {
    app.component('EButton', Button);
  },
} as Plugin;
