<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Panel from 'primevue/panel';
import { AuthStore } from '../../stores/authStore';
const authStore=AuthStore();
</script>

<template>
  <div class="text-center">
    <!--<h2 class="text-700">Dine klasser</h2>
    <div class="text-700">

      <Avatar style="margin:5px;" label="SP" size="xlarge" />
      <Avatar style="margin:5px;" label="SE" size="xlarge" />
      <Avatar style="margin:5px;" label="SV" size="xlarge" />

    </div>

    <br>
    <br>

    <Panel header="Aktuelle opgaver"  :toggleable="true">
        <template #icons>
            <Button class="p-button-sm" style="margin-right:10px;"> Ny opgave </Button>
        </template>
        @todo

        <div style="margin-top:25px;">
          <router-link to="/">
            Se tidligere opgaver...
          </router-link>
        </div>
    </Panel>

    <br>
    <br>-->

    <Panel header="Dine borger templates"  :toggleable="true" class="teacherhomecitizen">
        <template #icons>
          <router-link to="/citizen/create">
            <Button class="p-button-sm" style="margin-right:10px;"> Nyt template </Button>
          </router-link>
        </template>
        <Listbox :options="authStore.user.citizens" style="border-radius:0px;border:0px;">
          <template #option="slotProps">
            <router-link style="width:100%;display:inline-block;padding:0.75rem 0.75rem;" :to="{path:'/citizen/'+slotProps.option.id}" >
              {{slotProps.option.firstName}} {{slotProps.option.lastName}} {{slotProps.option.birthday}} [ID:{{slotProps.option.id}}]
            </router-link>
          </template>
        </Listbox>
    </Panel>

  </div>
</template>

<style>
.teacherhomecitizen .p-toggleable-content .p-panel-content{
  padding:0px !important;
}
.teacherhomecitizen .p-toggleable-content .p-panel-content .p-listbox .p-listbox-list .p-listbox-item{
  padding:0px;
}
</style>