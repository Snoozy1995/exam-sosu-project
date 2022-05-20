<script setup lang="ts">
import AdminMenuComponent from '../admin/AdminMenuComponent.vue';
import TeacherMenuComponent from '../teacher/TeacherMenuComponent.vue';
import StudentMenuComponent from '../student/StudentMenuComponent.vue';
import Breadcrumb from 'primevue/breadcrumb';
import {AuthStore} from '../../stores/authStore';
import {BreadcrumbStore} from '../../stores/breadcrumbStore';
import {MenuStore} from '../../stores/menuStore';

const authStore=AuthStore();
const menuStore=MenuStore();
</script>

<template>
  <div v-if="authStore.user&&authStore.user.username">
    <div v-if="authStore.user.role=='superuser'"><AdminMenuComponent /></div>
    <div v-if="authStore.user&&authStore.user.role=='teacher'"><TeacherMenuComponent /></div>
    <div v-if="authStore.user&&authStore.user.role=='student'"><StudentMenuComponent /></div>
    <Menubar style="border:0;border-radius:0;" :model="menuStore.items">
      <template #start>
          <router-link to="/" class="text-900 font-bold mb-1" style="margin-left:10px;margin-right:15px;">Sundhedsjournal 1.0</router-link>
      </template>
      <template #end>
        <Button icon="pi pi-cog" class="font-medium mb-1 p-button-small p-button-text" style="margin-right:15px;"></Button>
        <Button v-on:click="authStore.logout()" class="font-medium mb-1 p-button-small p-button-outlined" style="margin-right:15px;">Log ud</Button>
      </template>
    </Menubar>
    <div class="grid border-bottom-1 surface-border" style="margin:0px;margin-bottom:25px;">
      <div class="col-5" style="padding:0px;margin:0px;">
        <Breadcrumb id="bread" :home="{icon: 'pi pi-home', to: '/'}" :model="BreadcrumbStore().$state.breadcrumb" style="border:0;border-radius:0;"  />
      </div>
      <div class="p-breadcrumb col-7" style="padding:0px;margin:0px;border:0;border-radius:0;">
        <div  id='breadCrumbContainer' class="text-right" style="margin-right:10px;height:100%;display:flex;align-items:center;justify-content: end;"></div>
      </div>
    </div>
  </div>
</template>
