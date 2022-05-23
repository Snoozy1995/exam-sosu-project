<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {CitizenService} from '../services/citizen.service';
import Router from "../router";
import {Citizen} from "../models/citizen";
import {onBeforeRouteUpdate} from 'vue-router';
import axios from 'axios';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/da';
import {Fs3Service} from "../services/fs3.service";
import {FS3} from "../models/fs3";
import ViewCitizenTeacher from './teacher/ViewCitizenTeacher.vue';
import {AuthStore} from "../stores/authStore";
import UploaderComponent from "./shared/UploaderComponent.vue";
import ViewCitizenStudent from "./student/ViewCitizenStudent.vue";
import {FS3SubCategory} from "../models/fs3SubCategory";
import {Fs3OptionsService} from "../services/fs3Options.service";
import {FS3Option} from "../models/fs3Option";
import {Fs3DataService} from "../services/fs3Data.service";
//import {StudentTourService} from '../services/studentTour.service';
dayjs.extend(RelativeTime);
dayjs.locale('da');
const authStore = AuthStore();
//const studenttour=new StudentTourService();
const citizenService = new CitizenService();
const citizen: Ref<Citizen | undefined> = ref(undefined); //Edit this citizen to save
const fs3Service: Fs3Service = new Fs3Service();
const fs3OptionsService: Fs3OptionsService = new Fs3OptionsService();
const fs3DataService: Fs3DataService = new Fs3DataService();
const displayFunctionality = ref(false);
const displayFS3Data = ref(false);
const selectedHelpQuestionIndex = ref(0);
//const helpQuestionPosition = ('top');
const termEnum = Object.freeze({
  FUNCTIONAL: 1,
  HEALTH: 2,
  GENERAL: 3
});


// general
let generalDataDescription = ref(undefined);
// health
let healthDataCondition = ref(undefined);
let healthDataProfConOpinion = ref(undefined);
let healthDataExpConDesc = ref(undefined);
let healthDataPotProblems = ref(undefined);
// functional
let funcDataCitizenDescription = ref(undefined);
let funcDataCitWishAndGoal = ref(undefined);
let funcDataProfConOpinion = ref(undefined);
let funcDataHealthLevel = ref<FS3Option | undefined>({} as FS3Option);
let funcDataExpConOpinion = ref(undefined);
let funcDataExpHealthLevel = ref<FS3Option | undefined>({} as FS3Option);
let funcDataFollowUp = ref(undefined);

function resetFS3Data() {
// general
  generalDataDescription.value = undefined;
// health
  healthDataCondition.value = undefined;
  healthDataProfConOpinion.value = undefined;
  healthDataExpConDesc.value = undefined;
  healthDataPotProblems.value = undefined;
// functional
  funcDataCitizenDescription.value = undefined;
  funcDataCitWishAndGoal.value = undefined;
  funcDataProfConOpinion.value = undefined;
  funcDataHealthLevel.value = {option: undefined,
  definition: undefined,
  description: undefined,
  imageName: undefined};
  funcDataExpConOpinion.value = undefined;
  funcDataExpHealthLevel.value = {option: undefined,
    definition: undefined,
    description: undefined,
    imageName: undefined};
  funcDataFollowUp.value = undefined;
}

function create() {
  let data = ({

    fs3: selectedTerm.value,
    citizen: citizen.value,
    generalData: {
      description: generalDataDescription.value
    },
    healthData: {
      condition: healthDataCondition.value,
      professionalConditionOpinion: healthDataProfConOpinion.value,
      expectedConditionDescription: healthDataExpConDesc.value,
      potentialProblems: healthDataPotProblems.value,
    },
    functionalData: {
      citizensDescription: funcDataCitizenDescription.value,
      citizenWishesAndGoals: funcDataCitWishAndGoal.value,
      professionalConditionOpinion: funcDataProfConOpinion.value,
      healthLevel: funcDataHealthLevel.value.option,
      expectedConditionOpinion: funcDataExpConOpinion.value,
      expectedHealthLevel: funcDataExpHealthLevel.value.option,
      followUp: funcDataFollowUp.value,
    }
  });
  fs3DataService.createFS3Data(data);
  resetFS3Data();
}

const displayHelpQuestions = ref(false);


const openCreateFS3DataModal = () => {
  selectedSubCatHealth.value = selectedTerm.value.fs3Subs.at(0);
  selectedSubCatFunctional.value = selectedTerm.value.fs3Subs.at(0);
  displayFS3Data.value = true;
};
const closeCreateFS3DataModal = () => {
  displayFS3Data.value = false;
};

const openHelpQuestionsModal = () => {
  displayHelpQuestions.value = true;
};
const closeHelpQuestionsModal = () => {
  displayHelpQuestions.value = false;
  selectedHelpQuestionIndex.value = 0;
};

const incrementHelpQuestionIndex = () => {
  if (selectedHelpQuestionIndex.value === selectedTerm.value.helpQuestions.length - 1) return;
  selectedHelpQuestionIndex.value++;
};

const decrementHelpQuestionIndex = () => {
  if (selectedHelpQuestionIndex.value === 0) return;
  selectedHelpQuestionIndex.value--;
};

const fs3Options = ref<FS3Option[]>([]);

//General
let selectedTerm = ref<FS3>();
// Health
let selectedSubCatHealth = ref<FS3SubCategory>();
// Functional
let selectedSubCatFunctional = ref<FS3SubCategory>();

// General
const generalTerms = ref<FS3[]>([]);
// Functionality
const functionalTerms = ref<FS3[]>([]);
// const selectedFunctionalityTerm=ref<FS3>(); //Added to fix build error
// Health
const healthTerms = ref<FS3[]>([]);
// const selectedHealthTerm=ref<FS3>(); //Added to fix build error
const fs3Iterate = ref([
  {label: 'Generelle oplysninger', terms: generalTerms, id: 'tutorialGeneral', panelColor: 'p-panelGeneral', buttonColor: 'p-buttonGeneral'},
  {label: 'Helbredstilstande', terms: healthTerms, id: 'tutorialHealth', panelColor: 'p-panelHealth', buttonColor: 'p-buttonHealth'},
  {label: 'Funktionsevnetilstande', terms: functionalTerms, id: 'tutorialFunctionality', panelColor: 'p-panelFunctional', buttonColor: 'p-buttonFunctional'},
]);

async function onCreateFS3Data() {
  await create();
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

function getFS3Options() {
  fs3OptionsService.getFS3Options()
      .then((result) => fs3Options.value = result.data as FS3Option[])
      .catch((error) => console.log("error: " + error))
}

onMounted(() => {
  fetchCitizen();
  getFS3s();
  getFS3Options()

})

onBeforeRouteUpdate(update => {
  fetchCitizen(update.params.id);
});

let firstFetch = true;

function fetchCitizen(id = undefined) {
  citizenService.getCitizen(id == undefined ? Router.currentRoute.value.params.id : id).then(_citizen => {
    if (!_citizen || !_citizen.data) return; // Something went wrong, most likely a citizen with said id doesnt exist, or permission denied, we should probably redirect either way. @todo
    citizen.value = _citizen.data;
    if (firstFetch) {
      firstFetch = false;
      //studenttour.start();
    }
  }).catch((r) => setTimeout(() => fetchCitizen(), 1000)); //@todo
}
</script>
<template>
  <ViewCitizenTeacher v-if="citizen&&authStore.user.role=='teacher'" :citizen="citizen"/>
  <ViewCitizenStudent v-if="citizen&&authStore.user.role=='student'" :citizen="citizen"/>
  <Teleport to="#breadCrumbContainer">
    <Tag v-if="citizen" style="margin-right:5px;" severity="success"
         v-tooltip.bottom="'Sidst gemt '+dayjs(citizen.updated_at).format('HH.mm DD-MM-YY')+'\nÆndringer gemmes automatisk.'">
      Sidst gemt {{ dayjs(citizen.updated_at).fromNow() }}
    </Tag>
  </Teleport>

  <!--Loop version, general/health/functionality-->
  <Panel v-for="item in fs3Iterate" :id=item.id :header=item.label :toggleable="true"
         style="margin-bottom:25px;" v-bind:class=item.panelColor>
    <Listbox v-model="selectedTerm" :options=item.terms :multiple="false" :filter="true" optionLabel="definition"
             listStyle="min-height:200px;max-height:200px" filterPlaceholder="Filter"/>
    <Button label="Vælg" v-tooltip.top="'Vælg '+item.label" class="p-button-sm w-full" v-bind:class=item.buttonColor @click="openCreateFS3DataModal()"
            style="border-radius:0px;" autofocus/>
  </Panel>

  <!--FS3 Data-->
  <Dialog v-if="selectedTerm" v-model:visible="displayFS3Data" @update:visible="closeCreateFS3DataModal"
          :breakpoints="{'960px': '75vw'} "
          :style="{width: '50vw'}" rows="4" cols="30" class="align-self-end">

    <Button v-if="selectedTerm.term.id === termEnum.GENERAL" label="Hjælpespørgsmål" icon="pi pi-question-circle"
            @click="openHelpQuestionsModal"/>


    <Listbox v-model="selectedSubCatHealth" v-if="selectedTerm.term.id === termEnum.HEALTH" sele
             :options=selectedTerm.fs3Subs
             :multiple="false" :filter="true"
             optionLabel="category" listStyle="min-height:200px;max-height:200px" filterPlaceholder="Filter"/>
    <Listbox v-model="selectedSubCatFunctional" v-if="selectedTerm.term.id === termEnum.FUNCTIONAL" sele
             :options=selectedTerm.fs3Subs
             :multiple="false" :filter="true"
             optionLabel="category" listStyle="min-height:200px;max-height:200px" filterPlaceholder="Filter"/>
    <template #header>
      <div class="flex justify-content-left align-items-center">
        <h4 class="m-0">{{ selectedTerm.definition }}</h4>
      </div>
    </template>
    <Card
        style="margin-bottom: 2em">
      <template v-if="selectedTerm.term.id === termEnum.GENERAL" #title>
        <h5>{{ selectedTerm.definition }}</h5>
      </template>
      <template v-if="selectedTerm.term.id === termEnum.HEALTH && selectedSubCatHealth" #title>
        {{ selectedSubCatHealth.category }}
      </template>
      <template v-if="selectedTerm.term.id === termEnum.FUNCTIONAL && selectedSubCatFunctional" #title>
        <h5>{{ selectedSubCatFunctional.category }}</h5>
      </template>
      <template #content>
        <ul v-if="selectedTerm.term.id === termEnum.GENERAL"
            v-for="(subCatPractice) in selectedTerm.documentationPractices">
          <li>{{ subCatPractice.practice }}</li>
        </ul>
        <ul v-if="selectedSubCatHealth && selectedTerm.term.id === termEnum.HEALTH"
            v-for="(subCatPractice) in selectedSubCatHealth.subCatDocPractices">
          <li>{{ subCatPractice.practice }}</li>
        </ul>
        <ul v-if=" selectedSubCatFunctional && selectedTerm.term.id === termEnum.FUNCTIONAL"
            v-for="(subCatPractice) in selectedSubCatFunctional.subCatDocPractices">
          <li>{{ subCatPractice.practice }}</li>
        </ul>

      </template>
    </Card>
    <!--General-->
    <div v-if="selectedTerm.term.id === termEnum.GENERAL">
      <h4 class="m-0">Beskrivelse</h4>
      <Textarea v-model="generalDataDescription" :autoResize="true" class="w-full" autofocus/>
    </div>
    <!--Health-->
    <div v-if="selectedTerm.term.id === termEnum.HEALTH">
      <h4 class="m-0">Beskrivelse af tilstanden</h4>
      <Textarea v-model="healthDataCondition" :autoResize="true" class="w-full" autofocus/>
      <h4 class="m-0">Faglig vurdering</h4>
      <Textarea v-model="healthDataProfConOpinion" :autoResize="true" class="w-full" autofocus/>
      <h4 class="m-0">Forventet tilstand, opfølgning - dato</h4>
      <Textarea v-model="healthDataExpConDesc" :autoResize="true" class="w-full"
                autofocus/>
      <h4 class="m-0">Potentielle problemer</h4>
      <Textarea v-model="healthDataPotProblems" :autoResize="true" class="w-full" autofocus/>
    </div>
    <!--Functional-->
    <div v-if="selectedTerm.term.id === termEnum.FUNCTIONAL">
      <h4 class="m-0">Borgers vurdering og betydning</h4>
      <Textarea v-model="funcDataCitizenDescription" :autoResize="true" class="w-full"
                autofocus/>
      <h4 class="m-0">Borgers ønsker og mål</h4>
      <Textarea v-model="funcDataCitWishAndGoal" :autoResize="true" class="w-full"
                autofocus/>

      <h4 class="m-0">Tilstand - Faglig vurdering</h4>
      <Textarea v-model="funcDataProfConOpinion" :autoResize="true" class="w-full"
                autofocus/>
      <h4 class="m-0">Tilstand - Niveau 0-4</h4>
      <SelectButton v-model="funcDataHealthLevel" :options="fs3Options" optionLabel="definition"
                    class="flex align-items-center justify-content-center">
        <template #option="slotProps">
          <div class="max-w-min min-h-250 ">
            <h5>{{ slotProps.option.definition }}</h5>
            <img :src="'../src/assets/begraensninger/' + slotProps.option.imageName + '.png'">
          </div>
        </template>
      </SelectButton>
      <h4 class="m-0">Forventet tilstand - Faglig vurdering</h4>
      <Textarea v-model="funcDataExpConOpinion" :autoResize="true" class="w-full"
                autofocus/>
      <h4 class="m-0">Forventet tilstand - Niveau 0-4</h4>
      <SelectButton v-model="funcDataExpHealthLevel" :options="fs3Options"
                    optionLabel="definition" class="flex align-items-center justify-content-center">
        <template #option="slotProps">
          <div class="max-w-min min-h-250">
            <h5>{{ slotProps.option.definition }}</h5>
            <img :src="'../src/assets/begraensninger/' + slotProps.option.imageName + '.png'">
          </div>
        </template>
      </SelectButton>
      <h4 class="m-0">Opfølgning - Dato</h4>
      <Textarea v-model="funcDataFollowUp" :autoResize="true" class="w-full" autofocus/>
    </div>

    <div class="py-3 text-center">
      <Button label="Opret" icon="pi pi-check" class="w-full" @click="onCreateFS3Data"/>
    </div>
  </Dialog>

  <!--Help questions for fs3 General -->
  <Dialog v-if="selectedTerm" v-model:visible="displayHelpQuestions" @update:visible="closeHelpQuestionsModal"
          :breakpoints="{'960px': '75vw'}"
          :style="{width: '34vw'}" rows="4" cols="30" position="top">
    <template #header>
      <div class="flex justify-content-left align-items-center">
        <h4 class="m-0">Hjælpespørgsmål</h4>
      </div>
    </template>
    <Card style="width: 30rem; margin-bottom: 1em">
      <template #title>
        <p class="text-sm">Her finder du spørgsmål du kan stille borgeren relateret til
          {{ selectedTerm.definition.toLowerCase() }}.</p>
      </template>
      <template #content>
        <span>{{ selectedTerm.helpQuestions.at(selectedHelpQuestionIndex).question }}</span>
      </template>
    </Card>
    <template #footer>
      <div class="flex align-items-center justify-content-center">
        <Button label="Forrige" icon="pi pi-chevron-left" @click="decrementHelpQuestionIndex"/>
        <h4 class=" px-6">{{ selectedHelpQuestionIndex.valueOf() + 1 }} af
          {{ selectedTerm.helpQuestions.length }}</h4>
        <Button label="Næste" icon="pi pi-chevron-right" @click="incrementHelpQuestionIndex"/>
      </div>
    </template>
  </Dialog>

  <Teleport to="#rightSide">
    <li class="flex align-items-start py-3 px-2 border-top-1 border-right-1 border-left-1 surface-border flex-wrap">
      <div class="text-700 w-12 font-medium flex justify-content-center" style="font-size:20px;">Seneste data (FS3)
      </div>
      <ul class="text-900 list-none p-2 min-w-full" style="margin-bottom:10px; margin-top:10px;">
        <li v-if="citizen" style='padding:5px;padding-top:0px;' v-for="item in citizen.files">
          TODO
        </li>
      </ul>
    </li>
    <li class="flex align-items-start py-3 px-2 border-1 surface-border flex-wrap">
      <div class="text-700 w-12 font-medium flex justify-content-center" style="font-size:20px;">Tilhørende dokumenter
      </div>
      <ul class="text-900 list-none p-2 min-w-full" style="margin-bottom:10px; margin-top:10px;">
        <li v-if="citizen" style='padding:5px;padding-top:0px;' v-for="item in citizen.files">
          <a :href="axios.defaults.baseURL+'/public/'+item.filename">
            <i class="pi pi-file"></i> {{ item.originalname }} <span
              class="text-500">{{ (item.size / 1024 / 1024).toFixed(2) }}mb</span>
          </a>
        </li>
      </ul>
      <UploaderComponent/>
    </li>
  </Teleport>
</template>
<style>

.p-panel .p-panel-content {
  padding: 0px;
}

.p-buttonGeneral {
  color: #ffffff;
  background: #8a8a8a;
  border: 0 none;
  padding: 0.571rem 0.75rem;
  font-size: 1rem;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  border-radius: 4px;
}

.p-buttonHealth {
  color: #ffffff;
  background: #65859B;
  border: 0 none;
  padding: 0.571rem 0.75rem;
  font-size: 1rem;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  border-radius: 4px;
}

.p-buttonFunctional {
  color: #ffffff;
  background: #C6B22F;
  border: 0 none;
  padding: 0.571rem 0.75rem;
  font-size: 1rem;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  border-radius: 4px;
}

.p-panelGeneral .p-panel-header {
  border: 1px solid #e0e0e0;
  padding: 0.75rem;
  background: #8a8a8a;
  color: rgba(0, 0, 0, 0.87);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.p-panelHealth .p-panel-header {
  border: 1px solid #e0e0e0;
  padding: 0.75rem;
  background: #65859B;
  color: rgba(0, 0, 0, 0.87);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.p-panelFunctional .p-panel-header {
  border: 1px solid #e0e0e0;
  padding: 0.75rem;
  background: #C6B22F;
  color: rgba(0, 0, 0, 0.87);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}


.p-selectbutton .p-button.p-highlight {
  background: #3B82F6;
  border-color: #e0e0e1;
  color: rgba(0, 0, 0, 0.87);
}

.p-selectbutton .p-button {
  background: #FFFFFF;
  border: 1px solid rgba(171, 8, 8, 0.12);
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.p-selectbutton .p-button:focus.p-highlight {
  background: #3B82F6;
  border-color: #d9d8d9;
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
  background: #3B82F6;
  border-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
}
.p-button:hover {
  background: #3B82F6;
}


.p-listbox {
  border-radius: 0px;
}

.tourClass {
  border: 1px solid black;
  border-radius: 0px !important;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5) !important;
}
</style>
