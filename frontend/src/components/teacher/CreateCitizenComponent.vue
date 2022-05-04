<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import CreateAddress from '../misc/CreateAddressComponent.vue';
import { CitizenStore } from '../../stores/citizenStore';
import { AddressStore } from '../../stores/addressStore';
const cv_choices=[
'Single',
'I et forhold',
'Gift'];

const citizen=CitizenStore().citizen;

function create(){ //@todo
  if(!citizen.firstName.length||!citizen.lastName.length) return console.log("hmp1");
  if(!citizen.birthday.length) return;
  if(!citizen.civilStatus.length) return console.log("hmpf");
  if(AddressStore().street.length<4) return console.log("hmpf2");
  if(AddressStore().postCode.length!=4) return console.log("hmpf3");
  CitizenStore().createCitizen().then(res=>{
    //Send to this id view  @todo console.log(res.data.id);
  })
}
</script>
<template>
  <h2>Ny borger</h2>
  <label for="firstName" class="block text-900 font-medium mb-2">Fornavn</label>
  <InputText id="firstName" v-model="citizen.firstName" type="text" class="w-full mb-3" />

  <label for="lastName" class="block text-900 font-medium mb-2">Efternavn</label>
  <InputText id="lastName" type="text" v-model="citizen.lastName" class="w-full mb-3" />

  <label for="birth" class="block text-900 font-medium mb-2">Fødselsdag</label>
  <InputText id="birth" type="date" v-model="citizen.birthday" class="w-full mb-3" />

  <label for="civil" class="block text-900 font-medium mb-2">Civilstatus</label>
  <Dropdown id="civil" v-model="citizen.civilStatus" :options=cv_choices class="w-full mb-3" placeholder="" />

  <CreateAddress />

  Du kan tilføje flere detaljer til borgeren bagefter dette...<br><br>

  <Button label="Lav borger" v-on:click="create()" class="w-full mb-3" />
</template>