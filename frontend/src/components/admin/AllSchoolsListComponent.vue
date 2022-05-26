<script setup lang="ts">
import {ref, Ref} from "vue";
import {Citizen} from "../../models/citizen";
import {CitizenService} from "../../services/citizen.service";
import {School} from "../../models/school";
import {SchoolService} from "../../services/school.service";

const schools: Ref<School[]>=ref();
const schoolService = new SchoolService();

function getSchools(){
  schoolService.getAllSchools().then(res=>{
    schools.value=res.data;
  });
}
getSchools();

</script>

<template>

  <Panel header="Alle skoler" :toggleable="true" class="teacherhomecitizen">
    <template #icons>
      <router-link to="/school/create">
        <Button class="p-button-sm" icon="pi pi-plus" style="margin-right:10px;" v-tooltip="'Ny skabelon'"></Button>
      </router-link>
    </template>
    <Listbox :options="schools" style="border-radius:0px;border:0px;">
      <template #option="slotProps">
        <router-link style="width:100%;display:inline-block;padding:0px;" :to="{path:'/school/'+slotProps.option.id}" >
          <div class="grid border-top-1 surface-border p-1" style="margin:0px;">
            <div class="col-7 text-left overflow-hidden text-overflow-ellipsis">
              {{slotProps.option.name}}
            </div>
          </div>
        </router-link>
      </template>
    </Listbox>
  </Panel>
</template>