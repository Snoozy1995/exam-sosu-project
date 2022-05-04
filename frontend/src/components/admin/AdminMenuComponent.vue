<template>
  <Menubar style="border:0;border-radius:0;" :model="items">
    <template #start>
        <router-link to="/" class="text-900 font-bold mb-1" style="margin-left:10px;margin-right:15px;">Sundhedsjournal 1.0</router-link>
    </template>
    <template #end>
      <a href="#" v-on:click="logout()" class="text-700 font-medium mb-1" style="margin-right:15px;">Logout</a>
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
                  label:'Brugere',
                  items:[
                      {
                        to:'/user/create',
                        label:'Ny',
                        icon:'pi pi-fw pi-user-plus',
                      },
                      /*{
                          label:'Søg',
                          icon:'pi pi-fw pi-users',
                      }*/
                  ]
                },
                {
                  label:'Borgere',
                  items:[
                      { to: "/citizen/create", label: "Ny borger", icon: "pi pi-fw pi-user-plus" }
                  ]
                },
                {
                  label:'Skoler',
                  items:[
                      { to: "/school/create", label: "Ny skole", icon: "pi pi-fw pi-user-plus" }
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