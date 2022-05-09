<script setup lang="ts">
import {ref} from "@vue/runtime-dom";
import {FilterMatchMode, FilterOperator, FilterService} from 'primevue/api';
import {onMounted} from "vue";
import {CitizenService} from "../../services/citizen.service";
import {Citizen} from "../../models/citizen";


const EQUALS_FILTER = ref('Fornavn');

let citizens = ref<Citizen[]>([

]);

let selectedCitizen = ref<Citizen>();
const citizenService = ref(new CitizenService());

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  firstname: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  firstName: {
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    operator: FilterOperator.AND,
  },
  lastName: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  birthday: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },

});
const matchModesOptions = [
  {label: 'Matcher', value: FilterMatchMode.EQUALS},
  {label: 'Matcher ikke', value: FilterMatchMode.NOT_EQUALS},
  {label: 'Starter med', value: FilterMatchMode.STARTS_WITH},
  {label: 'Ender med', value: FilterMatchMode.ENDS_WITH},
]
const loading = ref(true);


function create() { //@todo

}

FilterService.register(EQUALS_FILTER.value, (value, filter) => {
  if (filter === undefined || filter === null || filter.trim() === '') {
    return true;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return value.toString() === filter.toString();
});


onMounted(() => {
  citizenService.value.getAlltCitizens().then((result) => citizens.value = result.data as Citizen[])
      .catch((error) => console.log("error: " + error))
  loading.value = false;
  });




</script>
<template>
  <div>
    <DataTable :value="citizens" :paginator="true" :rows="10"
               dataKey="id" :rowHover="true" v-model:selection="selectedCitizen" v-model:filters="filters" filterDisplay="menu" :loading="loading"
               paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
               currentPageReportTemplate="Viser {first} af {last} ud af {totalRecords} borgere"
               responsiveLayout="scroll">
      <template #header>
        <div class="flex justify-content-left align-items-center">
          <h4 class="m-0">Borgere</h4>

        </div>
      </template>
      <template #empty>
        Ingen borgere fundet.
      </template>
      <template #loading>
        Indlæser borger data. Vent venligst.
      </template>
      <Column selectionMode="single" headerStyle="width: 3rem"></Column>
      <Column field="firstName" header="Fornavn:" sortable style="min-width: 14rem" :filterMatchModeOptions="matchModesOptions">
        <template #body="{data}">
          {{data.firstName}}
        </template>
        <template #filter="{filterModel}">
          <InputText type="text" v-model="filterModel.value" placeholder="Fornavn:"/>
        </template>
      </Column>
      <Column field="lastName" header="Efternavn:" sortable style="min-width: 14rem" :filterMatchModeOptions="matchModesOptions">
        <template #body="{data}">
          {{data.lastName}}
        </template>
        <template #filter="{filterModel}">
          <InputText type="text" v-model="filterModel.value" placeholder="Efternavn:"/>
        </template>
      </Column>
      <Column field="birthday" header="Fødselsdag:" sortable style="min-width: 14rem" :filterMatchModeOptions="matchModesOptions">
        <template #body="{data}">
          {{data.birthday}}
        </template>
        <template #filter="{filterModel}">
          <InputText type="text" v-model="filterModel.value" placeholder="Fødselsdato:"/>
        </template>
      </Column>

    </DataTable>
  </div>
</template>
