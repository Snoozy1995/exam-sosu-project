<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import CreateAddress from './CreateAddress.vue';
import { CitizenStore } from '../stores/citizenStore';
const cities=[
    {name: 'Single', code: 'single'},
    {name: 'I et forhold', code: 'in a relationship'},
    {name: 'Gift', code: 'married'},
  ];

const citizen=CitizenStore().citizen;

function create(){
  if(!citizen.firstName.length||!citizen.lastName.length||!citizen.birthDate||!citizen.civilStatus.length) return;
  if(citizen.address.street.length<4) return;
  if(citizen.address.postCode.length!=4) return;
}
</script>
<template>
  <label for="firstName" class="block text-900 font-medium mb-2">Fornavn</label>
  <InputText id="firstName" v-model="citizen.firstName" type="text" class="w-full mb-3" />

  <label for="lastName" class="block text-900 font-medium mb-2">Efternavn</label>
  <InputText id="lastName" type="text" v-model="citizen.lastName" class="w-full mb-3" />

  <label for="birth" class="block text-900 font-medium mb-2">Fødselsdag</label>
  <InputText id="birth" type="date" v-model="citizen.birthDate" class="w-full mb-3" />

  <label for="civil" class="block text-900 font-medium mb-2">Civilstatus</label>
  <Dropdown id="civil" v-model="citizen.civilStatus" :options=cities class="w-full mb-3" optionLabel="name" placeholder="" />

  <CreateAddress />

  <Button label="Create" v-on:click="create()" class="w-full mb-3" />
</template>