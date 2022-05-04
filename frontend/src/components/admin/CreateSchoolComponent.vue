<script setup lang="ts">
import Button from 'primevue/button';
import CreateAddressComponent from '../misc/CreateAddressComponent.vue';
import { SchoolService } from '../../services/school.service'; //@todo move to store
import { SchoolStore } from '../../stores/schoolStore';

const store=SchoolStore();

function create(){
  //@todo
}
function autocomplete(){
  new SchoolService().autocomplete(store.school.name).then(_city=>{
    store.suggestions=_city;
  });
}
</script>
<template>
  <h2>Ny skole</h2>
  <label for="username" class="block text-900 font-medium mb-2">Skole</label>
  <InputText id="username" type="text" class="w-full mb-3" />
  <AutoComplete v-model="store.school.name" :suggestions="store.suggestions" field="label" @complete="autocomplete()"/>

  <CreateAddressComponent />

  <Button label="Lav skole" v-on:click="create()" class="w-full mb-3" />
</template>