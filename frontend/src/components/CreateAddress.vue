<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import { AddressStore } from '../stores/addressStore';
import { CityService } from '../services/city.service';

const store=AddressStore();

function test(){
  if(store.postCode.length<4) return;
  new CityService().query(store.postCode).then(city=>{
    //
  })
}
</script>
<template>
  <label for="street" class="block text-900 font-medium mb-2">Vejnavn</label>
  <InputText id="street" type="text" v-model="store.street" class="w-full mb-3" />

  <label for="city" class="block text-900 font-medium mb-2">By</label>
  <InputText id="city" type="text" v-model="store.city" class="w-full mb-3" />

  <label for="postCode" class="block text-900 font-medium mb-2">Postnr</label>
  <InputMask class="w-full mb-3" v-on:keyup="test()" v-model="store.postCode" mask="9999" />
</template>