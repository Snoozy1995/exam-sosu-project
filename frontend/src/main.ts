import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import Router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import ConfirmationService from 'primevue/confirmationservice';
import Tooltip from 'primevue/tooltip';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import AutoComplete from 'primevue/autocomplete';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Dialog from "primevue/dialog";
import Listbox from "primevue/listbox";
import Tag from "primevue/tag";
import axios from 'axios';
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Textarea from "primevue/textarea";
import Card from "primevue/card";
import Panel from 'primevue/panel';
import BadgeDirective from 'primevue/badgedirective';
import Socketio from "./plugins/socket.io";
import SelectButton from "primevue/selectbutton";
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
const app=createApp(App);

app.component('InputText',InputText);
app.component('Button',Button);
app.component('Menubar',Menubar);
app.component('AutoComplete',AutoComplete);
app.component('Accordion',Accordion);
app.component('AccordionTab',AccordionTab);
app.component("Dialog", Dialog);
app.component("Listbox", Listbox);
app.component("Tag",Tag);
app.component("Column",Column);
app.component("DataTable",DataTable);
app.component("Textarea",Textarea);
app.component("Card",Card);
app.component("Panel",Panel);
app.component("SelectButton",SelectButton);
app.component("Toast",Toast);
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);

app.use(createPinia())
app.use(Router);
app.use(PrimeVue);
app.use(ToastService)
app.use(ConfirmationService);
let con,baseUrl;
if(window.location.host.includes("localhost")){
  con="http://localhost:3000"
  baseUrl=con;
}else{
  con=window.location.host
  baseUrl="/api"
}
axios.defaults.baseURL=baseUrl;
axios.defaults.withCredentials=true;
app.use(Socketio, {
  connection:con,
  options: {
    autoConnect: false, 
  },
});  
app.mount("#app");
