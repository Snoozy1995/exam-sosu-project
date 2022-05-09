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
  'firstName': {value: null, matchMode: EQUALS_FILTER.value},
  'lastName': {value: null, matchMode: EQUALS_FILTER.value},
});
const filters2 = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  "country.name": {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  date: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  balance: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  status: {
    operator: FilterOperator.OR,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const matchModeOptions = ref([
  {label: 'Fornavn', value: FilterMatchMode.EQUALS},

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
        <DataTable :value="citizens" v-model:selection="selectedCitizen" selectionMode="single" :paginator="true" :rows="10" responsiveLayout="scroll"
                   dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading" class="p-datatable-sm">
          <template #empty>
            Ingen borgere fundet.
          </template>
          <template #loading>
            Indlæser borger data.. Vent venligst.
          </template>
          <template #header>
            <h3 class="m-0">Borgere</h3>
          </template>


<!--          <Column field="name" header="Name" sortable style="min-width: 14rem">-->
<!--            <template #body="{data}">-->
<!--              {{data.name}}-->
<!--            </template>-->
<!--            <template #filter="{filterModel}">-->
<!--              <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>-->
<!--            </template>-->
<!--          </Column>-->

          <Column field="firstName" header="Name" sortable style="min-width: 14rem">
            <template #body="{data}">
              {{data.firstName}}
            </template>
            <template #filter="{filterModel}">
              <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
          </Column>

          <Column field="firstName" header="Fornavn:" sortable :filterMatchModeOptions="matchModeOptions">
            <template #body="{data}">
              {{data.firstName}}
            </template>
            <template #filter="{filterModel,filterCallback}">
              <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Fornavn: ${filterModel.matchMode}`"/>
            </template>
          </Column>
          <Column field="lastName" header="Efternavn:" sortable :filterMatchModeOptions="matchModeOptions" >
            <template #body="{data}">
              {{data.lastName}}
            </template>
            <template #filter="{filterModel,filterCallback}">
              <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Efternavn:`"/>
            </template>
          </Column>

          <Column field="birthday" header="Fødselsdag:" sortable></Column>

        </DataTable>
      </div>
    </div>

  </div>
</template>
