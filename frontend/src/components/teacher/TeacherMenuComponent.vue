<template></template>
<script setup lang="ts">
import {MenuStore} from '../../stores/menuStore';

const menuStore=MenuStore();
menuStore.items=[
              {
                label:'Borgere',
                items:[
                    { to: "/citizen/create", label: "Ny", icon: "pi pi-fw pi-user-plus" }
                ]
              },
             ];
</script>
