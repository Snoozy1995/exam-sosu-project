<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import CreateAddress from './CreateAddress.vue';
import { CitizenStore } from '../stores/citizenStore';
const cities=[
    {name: 'Single', code: 'single'},
    {name: 'In a relationship', code: 'in a relationship'},
    {name: 'Married', code: 'married'},
  ];

const citizen=CitizenStore().citizen;
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

  <Button label="Create" class="w-full mb-3" />
</template>