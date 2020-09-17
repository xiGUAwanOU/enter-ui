import { Plugin } from 'vue';

import Button from '@/components/Button/Button.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import MultilineInput from '@/components/MultilineInput/MultilineInput.vue';
import NumberInput from '@/components/Input/NumberInput.vue';
import TextInput from '@/components/Input/TextInput.vue';

import '@/themes/default/Main.scss';

export default {
  install(app) {
    app.component('EButton', Button);
    app.component('ECheckbox', Checkbox);
    app.component('EMultilineInput', MultilineInput);
    app.component('ENumberInput', NumberInput);
    app.component('ETextInput', TextInput);
  },
} as Plugin;
