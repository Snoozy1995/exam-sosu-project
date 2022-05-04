<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { CitizenStore } from '../../stores/citizenStore';
import { ref } from 'pinia/node_modules/vue-demi';
import CreateAddressComponent from '../misc/CreateAddressComponent.vue';
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
  <h2>Ny skole</h2>
  <label for="username" class="block text-900 font-medium mb-2">Skole</label>
  <InputText id="username" type="text" class="w-full mb-3" />

  <CreateAddressComponent />

  <Button label="Lav skole" v-on:click="create()" class="w-full mb-3" />
</template>