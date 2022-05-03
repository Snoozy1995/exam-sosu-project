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
      <router-link to="/"><img src="https://www.pngall.com/wp-content/uploads/5/Lego-Toy-PNG-High-Quality-Image.png" alt="Image" height="50" class="mr-2"></router-link>
  </template>
  <template #end>
  </template>
</Menubar>
</template>

<style>
</style>