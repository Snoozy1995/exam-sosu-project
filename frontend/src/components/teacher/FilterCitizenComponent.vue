<script setup lang="ts">
import {ref} from "@vue/runtime-dom";
import {FilterMatchMode,FilterService} from 'primevue/api';
import {onMounted} from "vue";
import {CitizenService} from "../../services/citizen.service";
import {Citizen} from "../../models/citizen";
const selectedItem = ref();


const EQUALS_FILTER = ref('Fornavn');
// const LASTNAME_FILTER = ref('Efternavn');
let citizens = ref<Citizen[]>([

]);
const citizenService = ref(new CitizenService());
const filters = ref({
  'firstName': {value: null, matchMode: EQUALS_FILTER.value},
  'lastName': {value: null, matchMode: EQUALS_FILTER.value},
});
const matchModeOptions = ref([
  {label: 'Fornavn', value: EQUALS_FILTER.value},
  {label: 'Efternavn', value: EQUALS_FILTER.value}
]);
const loading = ref(true);


function create() { //@todo

}

onMounted(() => {
  citizenService.value.getAlltCitizens().then((result) => citizens.value = result.data as Citizen[])
      .catch((error) => console.log("error: " + error))
  loading.value = false;
  });

  FilterService.register(EQUALS_FILTER.value, (value, filter) => {
    if (filter === undefined || filter === null || filter.trim() === '') {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return value.toString() === filter.toString();
  });



</script>
<template>
<!--  <div>-->
<!--    <h5>Left Icon</h5>-->
<!--    <span class="p-input-icon-left ">-->
<!--            <i class="pi pi-search"/>-->
<!--            <InputText type="text" v-model="value3" placeholder="Search"/>-->
<!--        </span>-->
<!--  </div>-->
<!--  <div class="pt-2 w-12rem" >-->
<!--    <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 31 }" style="width:25rem" listStyle="height:250px" />-->
<!--  </div>-->


  <div>
    <div>
      <div class="card">
        <DataTable :value="citizens" :paginator="true" :rows="10" responsiveLayout="scroll"
                   dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading">
          <template #empty>
            Ingen borgere fundet.
          </template>
          <template #loading>
            Indlæser borger data.. Vent venligst.
          </template>
          <Column field="firstName" header="Find borger:" :filterMatchModeOptions="matchModeOptions">
            <template #body="{data}">
              {{data.firstName}}
            </template>
            <template #filter="{filterModel,filterCallback}">
              <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Søg på: ${filterModel.matchMode}`"/>
            </template>
          </Column>

        </DataTable>
      </div>
    </div>

  </div>
</template>
