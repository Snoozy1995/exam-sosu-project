<script setup lang="ts">
import Router from '../router';
import { AuthStore } from '../stores/authStore';
const store=AuthStore();
const user={
  username:'',
  password:''
}

function login(){
  store.login(user.username,user.password).then(_user=>{
    if(!_user||!_user.username.length) return;
    Router.push('/');
    //Redirect
  });
}

</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round w-full" style="margin-top:125px;">
      <h2 class="text-900 text-center mb-5">
          Login til Sundhedsjournal
      </h2>

      <div>
          <label for="username1" class="block text-900 font-medium mb-2">Brugernavn</label>
          <InputText id="username1" type="text" v-model="user.username" class="w-full mb-3" />

          <label for="password1" class="block text-900 font-medium mb-2">Adgangskode</label>
          <InputText id="password1" type="password" v-model="user.password" class="w-full mb-3" />

          <Button label="Login" icon="pi pi-user" v-on:click="login()" class="w-full"></Button>
      </div>
  </div>
</template>

<style scoped>

</style>