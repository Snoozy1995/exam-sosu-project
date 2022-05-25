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

const app=createApp(App);
let retrieved=false;
axios.get("/config/api-url.txt").then((result)=>{
  if(result.status&&result.status==200){
    retrieved=true;
    axios.defaults.baseURL=result.data;
  }else{
    axios.defaults.baseURL="http://localhost:3000";
  }
  host();
}).catch(()=>{
  axios.defaults.baseURL="http://localhost:3000";
  host()
});
axios.defaults.withCredentials=true;

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
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);

function host(){
  app.use(createPinia())
  app.use(Router);
  app.use(PrimeVue);
  app.use(ConfirmationService);
  app.use(Socketio, {
    connection:"http://185.196.21.189:3091",
    options: {
      autoConnect: false, //Turn off automatic connection
      // ... Other options
    },
  });  
  app.mount("#app");
}
