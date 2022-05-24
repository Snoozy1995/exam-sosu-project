<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup';
import {CitizenService} from '../../services/citizen.service';
import Inplace from 'primevue/inplace';
import dayjs from 'dayjs';
//import FilterCitizenComponent from "./teacher/FilterCitizenComponent.vue";
import CreateAddressComponent from '../misc/CreateAddressComponent.vue';
import {AddressStore} from '../../stores/addressStore';
import {getCurrentInstance, ref} from 'vue';
import {Citizen} from '../../models/citizen';

const citizenService=new CitizenService();
let instance=getCurrentInstance();
let citizen=instance.props.citizen as Citizen;
const toIterate=ref([
  {label:"Fornavn",target:'firstName',type:'text'},
  {label:"Efternavn",target:'lastName',type:'text'},
  {label:'Fødselsdag',target:'birthday',type:'date'}
]);
function save(){
  citizenService.saveCitizen(citizen).then((req)=>{
    if(req.status!=201) return;
    citizen=req.data;
  });
}
function saveAddress(){
  if(citizen==undefined) return;
  if(AddressStore().street.length<4) return console.log("hmpf2");
  if(AddressStore().postCode.length!=4) return console.log("hmpf3");
  citizen.address.postCode=Number.parseInt(AddressStore().postCode);
  citizen.address.street=AddressStore().street;
  save();
}
</script>
<script lang="ts">
import Router from "../../router";

export default {
  props:['citizen'],
	methods: {
    cloneConfirm(event:any) {
      console.log(event.currentTarget);
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Er du sikker på du vil kopier denne borger som et nyt template?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          new CitizenService().cloneCitizen(Router.currentRoute.value.params.id).then((res)=>{
            if(res.status!=200) return; // hmpf
            Router.push('/citizen/'+res.data.id);
          })
        },
      });
    },
  },
}
</script>
<template>
  <ConfirmPopup></ConfirmPopup>
  <Teleport to="#breadCrumbContainer">
    <router-link style="margin-right:5px;" :to="{path:'/citizen/'+citizen.parent.id}" v-if="citizen&&citizen.parent"><Button v-tooltip.bottom="'Gå til borger dette stammer fra'" icon="pi pi-arrow-up-left" class='p-button-sm' /></router-link>
    <Button icon="pi pi-user-plus" v-tooltip.bottom="'Duplikere template'" style="margin-right:5px;" class="p-button-sm p-button-help" v-on:click="cloneConfirm($event)" />
    <!--<Button class="p-button-sm p-button-info" icon="pi pi-calendar-plus" v-tooltip="'Brug til opgave/student'"></Button>-->
  </Teleport>

  <Teleport v-if="citizen" to="#leftSide">
    <div id="tutorialCitizenInfo" style="padding:10px;">
      <div class="font-medium text-3xl text-900 mb-3">Borger information</div>
      <ul class="list-none p-0 m-0 min-w-full">
        <!--Firstname/Lastname/Birthday-->
        <li v-for="item in toIterate" class="border-top-1 border-right-1 border-left-1 surface-border px-2">
          <Inplace :closable="true" @close="save()">
            <template #display>
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
                  <div class="w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text" v-tooltip.right="'Rediger '+item.label" /></div>
                </div>
            </template>
            <template #content>
              <span class="text-500 font-medium" style="margin-right:25px;">{{item.label}}</span>
              <InputText class="p-inputtext-sm" :type=item.type v-model="citizen[item.target]" />
            </template>
          </Inplace>
        </li>
        <li class="border-top-1 border-right-1 border-left-1 surface-border px-2">
          <Inplace :closable="true" @close="saveAddress()">
              <template #display>
                <div class="flex align-items-center flex-wrap">
                  <div class="text-500 w-6 md:w-3 font-medium">Adresse</div>
                  <div class="text-900 w-full md:w-7 md:flex-order-0 flex-order-1">{{citizen.address.street}}, {{citizen.address.postCode}} {{citizen.address.note}}</div>
                  <div class="w-6 md:w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text"></Button></div>
                </div>
            </template>
            <template #content><CreateAddressComponent /></template>
          </Inplace>
        </li>
        <!--Medicin-->
        <!--<li id="tutorial2" class="flex align-items-center px-2 border-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-3 font-medium">Medicin</div>
          <div class="text-900 w-full md:w-7 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
          <div class="w-6 md:w-2 flex justify-content-end"><Button icon="pi pi-pencil" class="p-button-text"></Button></div>
        </li>-->
      </ul>
    </div>
  </Teleport>
</template>
<style>
.p-inplace-content{ display:inline-block !important; }
.p-inplace .p-inplace-display{ padding:0px; }
.p-inplace .p-inplace-display:not(.p-disabled):hover{ background:none; }
.p-inplace .p-inplace-display:focus{ box-shadow:none; }
</style>
