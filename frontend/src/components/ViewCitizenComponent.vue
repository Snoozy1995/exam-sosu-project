<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup';
import { Ref, ref} from "vue";
import {onMounted} from "vue";
import FileUpload from 'primevue/fileupload';
import {CitizenService} from '../services/citizen.service';
import Router from "../router";
import { Citizen } from "../models/citizen";
import Inplace from 'primevue/inplace';
import { onBeforeRouteUpdate } from 'vue-router';
import axios from 'axios';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/da';
import FilterCitizenComponent from "./teacher/FilterCitizenComponent.vue";
import {Fs3Service} from "../services/fs3.service";
import {FS3} from "../models/fs3";
dayjs.extend(RelativeTime);
dayjs.locale('da');
const citizenService=new CitizenService();
const citizen:Ref<Citizen|undefined>=ref(undefined); //Edit this citizen to save
let paramId:any; // the current id visiting /citizen/paramId
const showUploadFilesDialog=ref(false);
const fs3Service: Fs3Service = new Fs3Service();
const displayGeneral = ref(false);
const displayHealth = ref(false);
const displayFunctionality = ref(false);
const displayFS3Data = ref(false);
const FS3TextareaData = ref('');
const openFunctionalityModal = () => {
  displayFunctionality.value = true;
};
const closeFunctionalityModal = () => {
  displayFunctionality.value = false;
};
const openHealthModal = () => {
  displayHealth.value = true;
};
const closeHealthModal = () => {
  displayHealth.value = false;
};
const openGeneralModal = () => {
  displayGeneral.value = true;
};
const closeGeneralModal = () => {
  displayGeneral.value = false;
};
// Create FS3Data
const openCreateFS3DataModal = () => {
  displayFS3Data.value = true;
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
const toIterate=ref([
  {label:"Fornavn",target:'firstName',type:'text'},
  {label:"Efternavn",target:'lastName',type:'text'},
  {label:'Fødselsdato',target:'birthday',type:'date'}
]);
const fs3Iterate=ref([
  {
    label:'Generelle oplysninger',
    click:openGeneralModal,
    terms:generalTerms,
    close:closeGeneralModal,
    dialog:displayGeneral
  },
  {label:'Helbredstilstande',click:openHealthModal,terms:healthTerms,close:closeHealthModal,dialog:displayHealth},
  {label:'Funktionsevnetilstande',click:openFunctionalityModal,terms:functionalTerms,close:closeFunctionalityModal,dialog:displayFunctionality},
]);

function onCreateFS3Data() {
  closeCreateFS3DataModal();
}
function getFS3s() {
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
  paramId=Router.currentRoute.value.params.id;
  fetchCitizen();
})


onBeforeRouteUpdate(update=>{
  if(update.name=="ViewCitizen"){
    paramId=update.params.id;
    fetchCitizen();
  }
});

const parentLabel=ref('');
function fetchCitizen(){
  citizenService.getCitizen(paramId).then(_citizen=>{
    if(!_citizen||!_citizen.data) return; // Something went wrong, most likely a citizen with said id doesnt exist, or permission denied, we should probably redirect either way. @todo
    citizen.value=_citizen.data;
    if(citizen.value&&citizen.value.parent){
      parentLabel.value="Kopieret fra borger template [ID: "+citizen.value.parent.id+"]";
    }
  });
}
function save(){
  citizenService.saveCitizen(citizen.value).then((req)=>{
    if(req.status!=201) return;
    citizen.value=req.data;
  });
}
function myUploader(event:any){
  var formData = new FormData();
  for(let file of event.files){ formData.append('file',file); formData.append('citizen',paramId); }
  axios.post('/upload',formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(()=>{
    fetchCitizen();
    showUploadFilesDialog.value=false;
  })
}
</script>
<script lang="ts">
export default {
	methods: {
    cloneConfirm(event:any) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Er du sikker på du vil kopier denne borger?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          new CitizenService().cloneCitizen(Router.currentRoute.value.params.id).then((res)=>{
            if(res.status!=200) return; // hmpf
            Router.push('/citizen/'+res.data.id);
          })
        },
      });
    },
  }
}
</script>
<template>
  <FilterCitizenComponent></FilterCitizenComponent>
  <ConfirmPopup></ConfirmPopup>
  <Tag v-if="citizen" severity="info" style='position:absolute;top:100px;right:75px;'>Sidst gemt: {{dayjs(citizen.updated_at).fromNow()}} </Tag>
  <router-link :to="{path:'/citizen/'+citizen.parent.id}" v-if="citizen&&citizen.parent"><Button v-bind:label=parentLabel icon="pi pi-arrow-up-left" class='p-button-sm'></Button></router-link>
  <div class="surface-section" style="padding:15px;" v-if="citizen">
    <div class="text-center py-4"><span class="p-buttonset"><Button class="p-button-sm p-button-info">Brug til opgave/student</Button><Button class="p-button-sm p-button-help" v-on:click="cloneConfirm($event)">Nyt template fra denne borger</Button></span></div>
    <div class="font-medium text-3xl text-900 mb-3">Borger information:</div>
    <div class="text-500 mb-5">Her kan du lave ændringer på borger.</div>
    <ul class="list-none p-0 m-0 min-w-full">
      <!--Firstname/Lastname/Birthday-->
      <li v-for="item in toIterate" class="border-top-1 surface-border px-2">
        <Inplace :closable="true" @close="save()">
          <template #display>
              <div class="flex align-items-center flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">{{item.label}}</div>
                <div class="text-900 w-6 md:w-8 md:flex-order-10 flex-order-0 p-2">
                  <div v-if="item.type=='date'">
                    {{dayjs(Date.now()).diff(citizen[item.target],'year')}} år - {{new Date(citizen[item.target]).toLocaleDateString()}}
                  </div>
                  <div v-if="item.type!='date'">
                    {{citizen[item.target]}}
                  </div>
                </div>
                <div class="w-7 md:w-2 flex justify-content-end">
                  <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
              </div>
          </template>
          <template #content>
            <span class="text-500 font-medium" style="margin-right:25px;">{{item.label}}</span>
            <InputText :type=item.type v-model=citizen[item.target] style="margin-right:auto;"/>
          </template>
        </Inplace>
      </li>
      <!--Medicin-->
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Medicin</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Dokumenter</div>
        <div class="text-900 w-full md:w-8 md:flex-order-10 flex-order-0 p-2"><ul class="list-none p-0 m-0 min-w-full">
          <li style='padding:5px;' v-for="item in citizen.files">
            <a :href="axios.defaults.baseURL+'public/'+item.filename" >
              <i class="pi pi-file"></i> {{item.originalname}}
            </a>
          </li>
        </ul></div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button v-tooltip.top="'Upload dokumenter'" class='p-button-text' v-on:click="()=>{showUploadFilesDialog=true}"><i style="font-size: 1.5rem" class="pi pi-upload"></i></Button>
        </div>
      </li>
      <li v-for="item in fs3Iterate">
        <!--Loop version, general/health/functionality-->
        <Accordion>
          <AccordionTab :header=item.label>
            <p>{{item.label}}</p>
            <Button class="m-1" @click=item.click label="Ny" icon="pi pi-external-link"/>
          </AccordionTab>
        </Accordion>
        <Dialog :header=item.label v-model:visible=item.dialog :breakpoints="{'960px': '75vw'} " :style="{width: '50vw'}">
          <Listbox v-model="selectedTerm" :options=item.terms :multiple="false" :filter="true" optionLabel="definition"
                  listStyle="max-height:250px" style="width:30rem" filterPlaceholder="Search">
          </Listbox>
          <Button label="Annuller" icon="pi pi-times" @click=item.close class="p-button-text"  />
          <Button label="Opret" icon="pi pi-check" @click="openCreateFS3DataModal()" autofocus/>
        </Dialog>
      </li>
    </ul>
  </div>
  <!--FS3 Data-->
  <Dialog v-if="selectedTerm" v-model:visible="displayFS3Data" :breakpoints="{'960px': '75vw'} "
          :style="{width: '50vw'}" rows="4" cols="30" >
    <template #header>
      <div class="flex justify-content-left align-items-center">
        <h4 class="m-0">{{ selectedTerm.definition }}</h4>

      </div>
    </template>
    <Card style="width: 25rem; margin-bottom: 2em">
      <template #title>
        <h5 class="m-0">{{ selectedTerm.definition }}</h5>
      </template>
      <template #content>
        <p>{{selectedTerm.options }}</p>
      </template>
    </Card>
    <h4 class="m-0">Beskrivelse</h4>
    <Textarea v-model="FS3TextareaData" :autoResize="true" rows="5" cols="30" />
    <Button label="Annuller" icon="pi pi-times" @click="closeFunctionalityModal" class="p-button-text"/>
    <Button label="Opret" icon="pi pi-check" @click="onCreateFS3Data" autofocus/>
  </Dialog>
  <Dialog header="Upload filer" v-model:visible="showUploadFilesDialog"><FileUpload :customUpload="true" :maxFileSize="10000000" @uploader="myUploader" :multiple="true" /></Dialog>
</template>
<style>
.p-inplace-content{
  display:inline-block !important;
  padding-top:1rem;padding-bottom:1rem;
}
.p-inplace .p-inplace-display:not(.p-disabled):hover{
  background:none;
}
.p-inplace .p-inplace-display:focus{
  box-shadow:none;
}
</style>
