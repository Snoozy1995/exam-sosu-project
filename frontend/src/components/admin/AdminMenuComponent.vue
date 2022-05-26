<template>
</template>

<script setup lang="ts">
import {MenuStore} from '../../stores/menuStore';

const menuStore=MenuStore();
menuStore.items=[
        {
          label:'Brugere',
          items:[
              {
                to:'/user/create',
                label:'Ny',
                icon:'pi pi-fw pi-user-plus',
              }/*,
              {
                to:'/user/search',
                label:'Søg',
                icon:'pi pi-fw pi-users',
              }*/
          ]
        },
        {
          label:'Skoler',
          items:[
              { to: "/school/create", label: "Ny", icon: "pi pi-fw pi-user-plus" },
              {
                to:'/school/list',
                label:'Liste',
                icon:'pi pi-fw pi-users',
              }
          ]
        },
        //{
        //  label:'Filer',
        //},
      ];
</script>
