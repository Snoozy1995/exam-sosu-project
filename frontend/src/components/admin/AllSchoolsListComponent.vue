<script setup lang="ts">


</script>

<template>

  <Panel header="Alle skoler" :toggleable="true" class="schools">
    <template #icons>
      <router-link to="/school/create">
        <Button class="p-button-sm" icon="pi pi-plus" style="margin-right:10px;" v-tooltip="'Nyt template'"></Button>
      </router-link>
    </template>
    <Listbox :options="school" style="border-radius:0px;border:0px;">
      <template #option="slotProps">
        <router-link style="width:100%;display:inline-block;padding:0px;" :to="{path:'/school/'+slotProps.option.school.name}" >
          <div class="grid border-top-1 surface-border p-1" style="margin:0px;">
            <div class="col-7 text-left overflow-hidden text-overflow-ellipsis">
              {{slotProps.option.schoolName}}
            </div>
          </div>
        </router-link>
      </template>
    </Listbox>
  </Panel>
</template>