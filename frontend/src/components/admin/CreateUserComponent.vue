<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import {ref} from 'pinia/node_modules/vue-demi';
import {AuthStore} from '../../stores/authStore';
import {SchoolService} from '../../services/school.service';
import {SchoolStore} from '../../stores/schoolStore';

const store=SchoolStore();
const cv_choices=[
'Superuser',
'Teacher',
'Student'];

const username=ref('');
const password=ref('')
const role=ref('');
const school=ref('');
function create(){
  AuthStore().createUser(username.value,password.value,role.value.toLowerCase(),school.value).then(res=>{
    //@todo
  });
  //@todo
}
function autocomplete(){
  new SchoolService().autocomplete(school.value).then(_city=>{
    store.suggestions=_city;
  });
}
</script>
<template>
  <h2>Ny bruger</h2>
  <label for="username" class="block text-900 font-medium mb-2">Brugernavn</label>
  <InputText id="username" v-model="username" type="text" class="w-full mb-3" />

  <label for="pass" class="block text-900 font-medium mb-2">Adgangskode</label>
  <InputText id="pass" type="password" v-model="password" class="w-full mb-3" />

  <label for="civil" class="block text-900 font-medium mb-2">Rolle</label>
  <Dropdown id="civil" v-model="role" :options=cv_choices class="w-full mb-3" placeholder="" />

  <label for="school" class="block text-900 font-medium mb-2">Skole (If applicable)</label>
  <AutoComplete v-model="school" :forceSelection="true" :suggestions="store.suggestions" field="label" @complete="autocomplete()" style="margin-bottom:25px;"/>

  <Button label="Lav bruger" v-on:click="create()" class="w-full mb-3" />
</template>
