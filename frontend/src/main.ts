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
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Dialog from "primevue/dialog";
import PickList from "primevue/picklist";
import Listbox from "primevue/listbox";

const app=createApp(App);

app.component('InputText',InputText);
app.component('Button',Button);
app.component('Menubar',Menubar);
app.component('AutoComplete',AutoComplete);
app.component('Accordion',Accordion);
app.component('AccordionTab',AccordionTab);
app.component("Dialog", Dialog);
app.component("Listbox", Listbox);
app.use(createPinia())
app.use(Router);
app.use(PrimeVue);

app.mount('#app');
