import { Plugin } from 'vue';

import Button from '@/components/Button/Button.vue';
import NumberInput from '@/components/NumberInput/NumberInput.vue';
import TextInput from '@/components/TextInput/TextInput.vue';

import '@/themes/default/Main.scss';

export default {
  install(app) {
    app.component('EButton', Button);
    app.component('ENumberInput', NumberInput);
    app.component('ETextInput', TextInput);
  },
} as Plugin;
