<script setup lang="ts">
import AutoComplete, { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import { AddressStore } from '../stores/addressStore';
import { CityService } from '../services/city.service';
import { AddressService } from '../services/address.service';

const store=AddressStore();

function test(){
  if(store.postCode.length!=4) return;
  new CityService().query(store.postCode).then(_city=>{
    _city=_city.data[0];
    if(!_city) return;
    store.city=_city.navn;
    store.municipality=_city.kommuner[0].navn
    //
  })
}

function test2(event: AutoCompleteItemSelectEvent){
  store.city=event.value.value;
  new CityService().query(event.value.value).then(_city=>{
    _city=_city.data[0];
    if(!_city) return;
    store.postCode=_city.nr;
    store.municipality=_city.kommuner[0].navn
    //
  })
}

function test3(event: AutoCompleteItemSelectEvent){
  store.street=event.value.value;
  store.postCode=event.value.postCode;
  test();
}

function search(){
  new CityService().autoComplete(store.city).then(_city=>{
    store.suggestions=_city;
  });
}

function searchStreet(){
  new AddressService().autoComplete(store.street).then(_city=>{
    console.log(_city);
    store.streetsuggestions=_city;
  });
}
</script>
<template>
  <label for="street" class="block text-900 font-medium mb-2">Vejnavn</label>
  <AutoComplete v-model="store.street" :suggestions="store.streetsuggestions" field="label" @complete="searchStreet()" @item-select="test3($event)"/>

  <div class="grid">
    <div class="col-6">
      <label for="city" class="block text-900 font-medium mb-2">By</label>
      <AutoComplete v-model="store.city" :suggestions="store.suggestions" field="label" @complete="search()" @item-select="test2($event)"/>
    </div>
    <div class="col-6">
      <label for="postCode" class="block text-900 font-medium mb-2">Postnr</label>
    <InputText class="w-full mb-3" type="number" v-on:keyup="test()" v-model="store.postCode" />
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