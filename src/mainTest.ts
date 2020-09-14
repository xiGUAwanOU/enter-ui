import { createApp } from 'vue';

import TestApp from '@/TestApp.vue';

import EnterUI from '@/main';

createApp(TestApp).use(EnterUI).mount('#app');
