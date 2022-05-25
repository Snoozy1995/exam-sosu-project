<script setup lang="ts">
import {AuthStore} from "../../stores/authStore";
import Sidebar from 'primevue/sidebar';
import {inject, onMounted, ref} from 'vue';
import Router from '../../router';
import {Socket} from "socket.io-client";

const socket = inject('socket') as Socket;
let authStore=AuthStore();
let show=ref(false);
let firstConnect=ref(true);
socket.on("connect",()=>{
  console.log("connected");
  show.value=false;
  if(firstConnect.value==false){
    authStore.getProfile().then((user)=>{
      if(!user.username){
        Router.push('/login');
      }
    }).catch(()=>{ });
  }
  firstConnect.value=false;
});
socket.on('connect_error',()=>{
  show.value=true;
  console.log("connectError")
})
socket.on('disconnect',()=>{
  show.value=true;
  console.log("disconnect")
});
socket.on('close',()=>{
  console.log("closed")
});
onMounted(() => {
  socket.connect(); //Connect to socket server
  console.log("onMountedCalled")
});
</script>
<template>
<Sidebar style='opacity:0.98;' v-model:visible=show position="full" :showCloseIcon="false" >
  <div class="text-700 text-center" style="margin-top:125px;">
    <div class="col-10 col-offset-1 lg:col-4 lg:col-offset-4">
      <h1 class="text-blue-600 font-bold mb-3">Sundhedsjournalen</h1>
      <div class="text-700 text-2xl mb-5">Vi beklager men der er problemer med at skabe forbindelse til vores netværk.</div>
      <div class="text-700 text-2 mb-5">Vent venligst og prøv igen senere, du kan også vente her og siden vil automatisk ændre hvis forbindelsen kommer igen.</div>
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i><br><br><br>
    </div>
  </div>
</Sidebar>
</template>
