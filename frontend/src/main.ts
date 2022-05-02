import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './router';

const app=createApp(App);

app.use(createPinia())
app.use(Router);


app.mount('#app');