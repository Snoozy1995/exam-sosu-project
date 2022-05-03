import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './router';
import PrimeVue from 'primevue/config';
const app=createApp(App);

import Tooltip from 'primevue/tooltip';

app.directive('tooltip', Tooltip);

app.use(createPinia())
app.use(Router);
app.use(PrimeVue);

app.mount('#app');