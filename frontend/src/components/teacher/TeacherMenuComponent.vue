<template>
  <Menubar style="border:0;border-radius:0;" :model="items">
    <template #start>
        <router-link to="/" class="text-900 font-bold mb-1" style="margin-left:10px;margin-right:15px;">Sundhedsjournal 1.0</router-link>
    </template>
    <template #end>
      <Button v-on:click="logout()" class="font-medium mb-1 p-button-small p-button-outlined" style="margin-right:15px;">Log ud</Button>
    </template>
  </Menubar>
</template>

<script lang="ts">
import { AuthStore } from "../../stores/authStore"

export default {
    data() {
        return {
            items: [
              {
                label:'Borgere',
                items:[
                    { to: "/citizen/create", label: "Ny", icon: "pi pi-fw pi-user-plus" }
                ]
              },
             ]
        }
    },
  methods:{
    logout(){
      AuthStore().logout();
    }
  }
}
</script>