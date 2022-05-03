<script setup lang="ts">
import Menubar from 'primevue/menubar';
//import { UserStore } from "@/stores/userStore";
//import { logout } from '@/composables/logout';
//import Dialog from 'primevue/dialog';
//function log(){
//  logout();
//}
//const userStore = UserStore();
const items = [
  { to: "/", label: "Home", icon: "pi pi-fw pi-home" },
  //{ to: "/chat", label: "Chats", icon: "pi pi-fw pi-book" },
  { to: "/createCitizen", label: "Ny borger", icon: "pi" },
];
</script>

<template>
<Menubar style="border:0;border-radius:0;" :model="items">
  <template #start>
      <router-link to="/" class="text-900 font-bold mb-1">Health Journal</router-link>
  </template>
  <template #end>
  </template>
</Menubar>
</template>

<style>
</style>