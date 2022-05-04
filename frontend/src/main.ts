import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import AutoComplete from 'primevue/autocomplete';

const app=createApp(App);

app.component('InputText',InputText);
app.component('Button',Button);
app.component('Menubar',Menubar);
app.component('AutoComplete',AutoComplete);

app.use(createPinia())
app.use(Router);
app.use(PrimeVue);

app.mount('#app');