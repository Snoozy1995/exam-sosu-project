<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { CitizenStore } from '../../stores/citizenStore';
import { ref } from 'pinia/node_modules/vue-demi';
const cv_choices=[
'Superuser',
'Teacher',
'Student'];

const role=ref('');

const citizen=CitizenStore().citizen;

function create(){
  //@todo
}
</script>
<template>
  <h2>Ny bruger</h2>
  <label for="username" class="block text-900 font-medium mb-2">Brugernavn</label>
  <InputText id="username" type="text" class="w-full mb-3" />

  <label for="pass" class="block text-900 font-medium mb-2">Adgangskode</label>
  <InputText id="pass" type="password" class="w-full mb-3" />

  <label for="civil" class="block text-900 font-medium mb-2">Rolle</label>
  <Dropdown id="civil" v-model="role" :options=cv_choices class="w-full mb-3" placeholder="" />

  Du kan tilføje flere detaljer til brugeren bagefter dette...<br><br>

  <Button label="Lav borger" v-on:click="create()" class="w-full mb-3" />
</template>