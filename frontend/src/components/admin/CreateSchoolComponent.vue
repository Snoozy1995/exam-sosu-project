<script setup lang="ts">
import Button from 'primevue/button';
import CreateAddressComponent from '../misc/CreateAddressComponent.vue';
import { SchoolStore } from '../../stores/schoolStore';
import { AddressStore } from '../../stores/addressStore';

const store=SchoolStore();

function create(){
  if(!store.school.name.length) return;
  if(AddressStore().street.length<4) return console.log("hmpf2");
  if(AddressStore().postCode.length!=4) return console.log("hmpf3");
  store.createSchool();
  //@todo
}
</script>
<template>
  <h2>Ny skole</h2>
  <label for="username" class="block text-900 font-medium mb-2">Skole</label>
  <InputText id="username" v-model="store.school.name" type="text" class="w-full mb-3" />

  <CreateAddressComponent />

  <Button label="Lav skole" v-on:click="create()" class="w-full mb-3" />
</template>