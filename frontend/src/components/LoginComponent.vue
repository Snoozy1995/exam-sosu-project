<script setup lang="ts">
import {ref} from 'vue';
import Router from '../router';
import {AuthStore} from '../stores/authStore';

const store=AuthStore();
const user={
  username:'',
  password:''
}
const failUsername=ref('');
const failPassword=ref('');
function login(){
  let fail=false;
  let bg = document.getElementById("username1");
  if(!user.username.length){
    fail=true;
    if (bg != null) bg.setAttribute("class","p-inputtext p-component w-full mb-3 p-invalid");
    failUsername.value="Brugernavn er påkrævet!";
  }else{
    if (bg != null) bg.setAttribute("class","p-inputtext p-component w-full mb-3");
    failUsername.value="";
  }
  
  let bg1 = document.getElementById("password1");
  if(!user.password.length){
    fail=true;
    if (bg1 != null) bg1.setAttribute("class","p-inputtext p-component w-full mb-3 p-invalid");
    failPassword.value="Adgangskode er påkrævet!";
  }else{
    if (bg1 != null) bg1.setAttribute("class","p-inputtext p-component w-full mb-3");
    failPassword.value="";
  }

  if(fail) return;
  store.login(user.username,user.password).then(_user=>{
    if(!_user||!_user.username) return;
    Router.push(Router.currentRoute.value.query.redirect as string||'/');
  }).catch(err=>{
    alert(err);
  });
}

</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round col-12 md:col-8 md:col-offset-2" style="margin-top:125px;">
      <h2 class="text-900 text-center mb-5">
          Login til Sundhedsjournalen
      </h2>

      <div>
          <label for="username1" class="block text-900 font-medium mb-2">Brugernavn</label>
          <Tag v-if="failUsername.length" severity="danger">{{failUsername}}</Tag>
          <InputText id="username1" type="text" v-model="user.username" class="w-full mb-3" />

          <label for="password1" class="block text-900 font-medium mb-2">Adgangskode</label>
          <Tag v-if="failPassword.length" severity="danger">{{failPassword}}</Tag>
          <InputText id="password1" type="password" v-model="user.password" class="w-full mb-3" />

          <Button label="Login" icon="pi pi-user" v-on:click="login()" class="w-full"></Button>
      </div>
  </div>
</template>

<style scoped>

</style>
