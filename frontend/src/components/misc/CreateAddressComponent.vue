<script setup lang="ts">
import AutoComplete, { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import { AddressStore } from '../../stores/addressStore';
import { CityService } from '../../services/city.service'; //@todo move to store
import { AddressService } from '../../services/address.service'; //@todo move to store

const store=AddressStore();

function postCodeLookup(){
  if(store.postCode.length!=4) return;
  new CityService().query(store.postCode).then(_city=>{
    if(!_city.data||!_city.data.length) return;
    _city=_city.data[0];
    store.city=_city.navn;
    store.municipality=_city.kommuner[0].navn
  })
}

function autoCompleteCity(event: AutoCompleteItemSelectEvent){
  store.city=event.value.value;
  new CityService().query(event.value.value).then(_city=>{
    if(!_city.data||!_city.data.length) return;
    _city=_city.data[0];
    store.postCode=_city.nr;
    store.municipality=_city.kommuner[0].navn
  })
}

function autoCompleteAddress(event: AutoCompleteItemSelectEvent){
  store.street=event.value.value;
  store.postCode=event.value.postCode;
  postCodeLookup();
}

function search(){
  new CityService().autoComplete(store.city).then(_city=>{
    store.suggestions=_city;
  });
}

function searchStreet(){
  new AddressService().autoComplete(store.street).then(_city=>{
    store.streetsuggestions=_city;
  });
}
</script>
<template>
  <label for="street" class="block text-900 font-medium mb-2">Vejnavn</label>
  <AutoComplete v-model="store.street" :suggestions="store.streetsuggestions" field="label" @complete="searchStreet()" @item-select="autoCompleteAddress($event)"/>

  <div class="grid">
    <div class="col-6">
      <label for="city" class="block text-900 font-medium mb-2">By</label>
      <AutoComplete v-model="store.city" :suggestions="store.suggestions" field="label" @complete="search()" @item-select="autoCompleteCity($event)"/>
    </div>
    <div class="col-6">
      <label for="postCode" class="block text-900 font-medium mb-2">Postnr</label>
    <InputText class="w-full mb-3" type="number" v-on:keyup="postCodeLookup()" v-model="store.postCode" />
    </div>
    <div class="col-12">
      <label for="municipality" class="block text-900 font-medium mb-2">Kommune</label>
      <InputText id="municipality" type="text" disabled=true v-model="store.municipality" class="w-full mb-3" />
    </div>
  </div>
</template>
<style>
.p-autocomplete, .p-autocomplete-input {
  width: 100%;
  margin-bottom:8px;
}
</style>