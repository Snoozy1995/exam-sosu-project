<script setup lang="ts">
import Avatar from 'primevue/avatar';
import { AuthStore } from '../../stores/authStore';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/da';
dayjs.extend(RelativeTime);
dayjs.locale('da');
const authStore=AuthStore();
</script>

<template>
  <div class="text-center">
    <div class="col-12 md:col-8 md:col-offset-2">
      <h2 class="text-700">Dine klasser</h2>
      <div class="text-700">

        <Avatar style="margin:5px;" label="SP" size="xlarge" />
        <Avatar style="margin:5px;" label="SE" size="xlarge" />
        <Avatar style="margin:5px;" label="SV" size="xlarge" />

      </div>

      <br>
      <br>

      <Panel header="Aktuelle opgaver"  :toggleable="true">
          <template #icons>
              <Button class="p-button-sm" icon="pi pi-plus" style="margin-right:10px;" v-tooltip="'Ny opgave'" />
          </template>
          <div class="w-full border-top-1 surface-border p-1"></div>
          <div style="margin-top:25px;" class="p-2">
            <router-link to="/">
              Se tidligere opgaver...
            </router-link>
          </div>
      </Panel>

      <br>
      <br>
      <Panel header="Dine templates"  :toggleable="true" class="teacherhomecitizen">
          <template #icons>
            <router-link to="/citizen/create">
              <Button class="p-button-sm" icon="pi pi-plus" style="margin-right:10px;" v-tooltip="'Nyt template'"></Button>
            </router-link>
          </template>
          <Listbox :options="authStore.user.citizens" style="border-radius:0px;border:0px;">
            <template #option="slotProps">
              <router-link style="width:100%;display:inline-block;padding:0px;" :to="{path:'/citizen/'+slotProps.option.id}" >
                <div class="grid border-top-1 surface-border p-1" style="margin:0px;">
                  <div class="col-7 text-left overflow-hidden text-overflow-ellipsis">
                    {{slotProps.option.firstName}} {{slotProps.option.lastName}} {{dayjs(Date.now()).diff(slotProps.option.birthday,'year')}} år
                  </div>
                  <div class="col-5 text-right">
                    <Tag severity="info">{{dayjs(slotProps.option.updated_at).fromNow()}} </Tag>
                  </div>
                </div>
              </router-link>
            </template>
          </Listbox>
      </Panel>
    </div>
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