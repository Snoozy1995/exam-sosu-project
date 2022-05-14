<script setup lang="ts">
import { Ref, ref} from "vue";
import {onMounted} from "vue";
import {CitizenService} from '../services/citizen.service';
import Router from "../router";
import { Citizen } from "../models/citizen";
import { onBeforeRouteUpdate } from 'vue-router';
import axios from 'axios';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/da';
//import FilterCitizenComponent from "./teacher/FilterCitizenComponent.vue";
import {Fs3Service} from "../services/fs3.service";
import {FS3} from "../models/fs3";
import ViewCitizenTeacher from './teacher/ViewCitizenTeacher.vue';
import { AuthStore } from "../stores/authStore";
import UploaderComponent from "./shared/UploaderComponent.vue";
import ViewCitizenStudent from "./student/ViewCitizenStudent.vue";
import {Fs3SubCategory} from "../../../backend/dist/entities/fs3SubCategory.entity";
//import {StudentTourService} from '../services/studentTour.service';
dayjs.extend(RelativeTime);
dayjs.locale('da');
const authStore=AuthStore();
//const studenttour=new StudentTourService();
const citizenService=new CitizenService();
const citizen:Ref<Citizen|undefined>=ref(undefined); //Edit this citizen to save
const fs3Service: Fs3Service = new Fs3Service();
const displayFunctionality = ref(false);
const displayFS3Data = ref(false);
const FS3TextareaData = ref('');
const closeFunctionalityModal = () => {
  displayFunctionality.value = false;
};
// Create FS3Data
const openCreateFS3DataModal = () => {
  displayFS3Data.value = true;
  console.log(selectedTerm)
};
const closeCreateFS3DataModal = () => {
  displayFS3Data.value = false;
};
let fs3s = ref<FS3[]>([

]);
const selectedTerm=ref<FS3>();
// General
const generalTerms=ref<FS3[]>([]);
// Functionality
const functionalTerms=ref<FS3[]>([]);
// const selectedFunctionalityTerm=ref<FS3>(); //Added to fix build error
// Health
const healthTerms=ref<FS3[]>([]);
// const selectedHealthTerm=ref<FS3>(); //Added to fix build error
const fs3Iterate=ref([
  {label:'Generelle oplysninger',terms:generalTerms,id:'tutorialGeneral'},
  {label:'Helbredstilstande',terms:healthTerms,id:'tutorialHealth'},
  {label:'Funktionsevnetilstande',terms:functionalTerms,id:'tutorialFunctionality'},
]);

function onCreateFS3Data() {
  closeCreateFS3DataModal();
}
function getFS3s() {
  fs3Service.getFS3sByTerm('Generelle oplysninger')
      .then((result) => generalTerms.value = result.data as FS3[])
      .catch((error) => console.log("error: " + error))

  fs3Service.getFS3sByTerm('Generelle oplysninger')
      .then((result) => generalTerms.value = result.data as FS3[])
      .catch((error) => console.log("error: " + error))

  fs3Service.getFS3sByTerm('Funktionsevnetilstande')
      .then((result) => functionalTerms.value = result.data as FS3[])
      .catch((error) => console.log("error: " + error))
  fs3Service.getFS3sByTerm('Helbredstilstande')
      .then((result) => healthTerms.value = result.data as FS3[])
      .catch((error) => console.log("error: " + error))
}


onMounted(() => {
  getFS3s();

  fetchCitizen();
})

onBeforeRouteUpdate(update=>{
  fetchCitizen(update.params.id);
});

let firstFetch=true;
function fetchCitizen(id=undefined){
  citizenService.getCitizen(id==undefined?Router.currentRoute.value.params.id:id).then(_citizen=>{
    if(!_citizen||!_citizen.data) return; // Something went wrong, most likely a citizen with said id doesnt exist, or permission denied, we should probably redirect either way. @todo
    citizen.value=_citizen.data;
    if(firstFetch){
      firstFetch=false;
      //studenttour.start();
    }
  }).catch((r)=>setTimeout(()=>fetchCitizen(),1000)); //@todo
}
</script>
<template>
  <ViewCitizenTeacher v-if="citizen&&authStore.user.role=='teacher'" :citizen="citizen" />
  <ViewCitizenStudent v-if="citizen&&authStore.user.role=='student'" :citizen="citizen" />
  <Teleport to="#breadCrumbContainer">
    <Tag v-if="citizen" style="margin-right:5px;" severity="info" v-tooltip.bottom="'Sidst gemt '+dayjs(citizen.updated_at).format('HH.mm DD-MM-YY')+'\nÆndringer gemmes automatisk.'">Sidst gemt {{dayjs(citizen.updated_at).fromNow()}} </Tag>
  </Teleport>

  <!--Loop version, general/health/functionality-->
  <Panel v-for="item in fs3Iterate" :id=item.id :header=item.label :toggleable="true" style="margin-bottom:25px;">
    <Listbox v-model="selectedTerm" :options=item.terms :multiple="false" :filter="true" optionLabel="definition" listStyle="min-height:200px;max-height:200px" filterPlaceholder="Filter" />
    <Button label="Vælg" v-tooltip.top="'Vælg '+item.label" class="p-button-sm w-full" @click="openCreateFS3DataModal()" style="border-radius:0px;" autofocus/>
  </Panel>

  <!--FS3 Data-->
  <Dialog v-if="selectedTerm" v-model:visible="displayFS3Data" :breakpoints="{'960px': '75vw'} " :style="{width: '50vw'}" rows="4" cols="30" class="align-self-end" >
    <div class="right-100">
      <Button label="Hjælp" icon="pi pi-question-circle" @click="closeResponsive"/>
    </div>

    <Listbox v-if="selectedTerm.fs3Subs.length > 0" :options=selectedTerm.fs3Subs :multiple="false" :filter="true" optionLabel="category" listStyle="min-height:200px;max-height:200px" filterPlaceholder="Filter" />

    <template #header>
      <div class="flex justify-content-left align-items-center">
        <h4 class="m-0">{{ selectedTerm.definition }}</h4>
      </div>
    </template>
    <Card style="margin-bottom: 2em">
      <template #title>
        <h5 class="m-0">{{ selectedTerm.definition }}</h5>
      </template>
      <template #content>
        <p>{{selectedTerm.options }}</p>
      </template>
    </Card>
    <h4 class="m-0">Beskrivelse</h4>
    <Textarea v-model="FS3TextareaData" :autoResize="true" class="w-full" autofocus/>
    <div class="py-3 text-center">
      <Button label="Opret" icon="pi pi-check" class="w-full" @click="onCreateFS3Data" />
    </div>
  </Dialog>

  <Dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <template #footer>
      <Button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"/>
      <Button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus />
    </template>
  </Dialog>

  <Teleport to="#rightSide">
    <li class="flex align-items-start py-3 px-2 border-top-1 border-right-1 border-left-1 surface-border flex-wrap">
      <div class="text-700 w-12 font-medium flex justify-content-center" style="font-size:20px;">Seneste data (FS3)</div>
      <ul class="text-900 list-none p-2 min-w-full" style="margin-bottom:10px; margin-top:10px;">
        <li v-if="citizen" style='padding:5px;padding-top:0px;' v-for="item in citizen.files">
          TODO
        </li>
      </ul>
    </li>
    <li class="flex align-items-start py-3 px-2 border-1 surface-border flex-wrap">
      <div class="text-700 w-12 font-medium flex justify-content-center" style="font-size:20px;">Tilhørende dokumenter</div>
      <ul class="text-900 list-none p-2 min-w-full" style="margin-bottom:10px; margin-top:10px;">
        <li v-if="citizen" style='padding:5px;padding-top:0px;' v-for="item in citizen.files">
          <a :href="axios.defaults.baseURL+'/public/'+item.filename" >
            <i class="pi pi-file"></i> {{item.originalname}} <span class="text-500">{{(item.size/1024/1024).toFixed(2)}}mb</span>
          </a>
        </li>
      </ul>
      <UploaderComponent  />
    </li>
  </Teleport>
</template>
<style>
  .p-panel .p-panel-content{ padding:0px; }
  .p-listbox{ border-radius:0px; }
  .tourClass{
    border:1px solid black;
    border-radius:0px !important;
    box-shadow:0px 0px 2px 2px rgba(0,0,0,0.5) !important;
  }
</style>
