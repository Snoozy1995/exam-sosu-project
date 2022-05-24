<script setup lang="ts">
import dayjs from 'dayjs';
import {getCurrentInstance, ref} from 'vue';
import {Citizen} from '../../models/citizen';

let test=getCurrentInstance();
let citizen=test.props.citizen as Citizen;
const toIterate=ref([
  {label:"Fornavn",target:'firstName',type:'text'},
  {label:"Efternavn",target:'lastName',type:'text'},
  {label:'Fødselsdag',target:'birthday',type:'date'}
]);
</script>
<script lang="ts">
export default {
  props:['citizen'],
}
</script>
<template>
  <Teleport v-if="citizen" to="#leftSide">
    <div  id="tutorialCitizenInfo" style="padding:10px;">
      <div id="tutorial1" class="font-medium text-3xl text-900 mb-3">Borger information</div>
      <ul class="list-none p-0 m-0 min-w-full">
        <!--Firstname/Lastname/Birthday-->
        <li v-for="item in toIterate" class="border-top-1 border-right-1 border-left-1 surface-border px-2">
          <div class="flex align-items-center flex-wrap">
            <div class="text-500 w-4 md:w-3 font-medium">{{item.label}}</div>
            <div class="text-900 w-6 md:w-7 md:flex-order-10 flex-order-0 p-2">
              <div v-if="item.type=='date'">
                {{dayjs(Date.now()).diff(citizen.birthday,'year')}} år - {{new Date(citizen.birthday).toLocaleDateString()}}
              </div>
              <div v-if="item.type!='date'">
                {{citizen[item.target]}}
              </div>
            </div>
            <!--<div class="w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text" v-tooltip.right="'Rediger '+item.label" /></div>-->
          </div>
        </li>
        <li class="border-top-1 border-right-1 border-left-1 surface-border px-2">
          <div class="flex align-items-center flex-wrap">
            <div class="text-500 w-6 md:w-3 font-medium">Adresse</div>
            <div class="text-900 w-full md:w-7 md:flex-order-0 flex-order-1 p-2">{{citizen.address.street}}, {{citizen.address.postCode}} {{citizen.address.note}}</div>
            <!--<div class="w-6 md:w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text"></Button></div>-->
          </div>
        </li>
        <!--Medicin-->
        <li id="tutorial2" class="flex align-items-center px-2 border-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-3 font-medium">Medicin</div>
          <div class="text-900 w-full md:w-7 md:flex-order-0 flex-order-1 p-2">Robert De Niro, Al Pacino</div>
          <!--<div class="w-6 md:w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text"></Button></div>-->
        </li>
      </ul>
    </div>
  </Teleport>
</template>
