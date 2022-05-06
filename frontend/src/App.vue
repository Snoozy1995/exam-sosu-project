<script setup lang="ts">
import AdminMenuComponent from './components/admin/AdminMenuComponent.vue';
import TeacherMenuComponent from './components/teacher/TeacherMenuComponent.vue';
import StudentMenuComponent from './components/student/StudentMenuComponent.vue';
import Breadcrumb from 'primevue/breadcrumb';
import { AuthStore } from './stores/authStore';
import { BreadcrumbStore } from './stores/breadcrumbStore';
import ThemeComponent from './components/misc/ThemeComponent.vue';
import AdminLeftSideView from './components/admin/AdminLeftSideView.vue';
import { SocketStore } from './stores/socketStore';
import Router from "./router";
const authStore=AuthStore();
const socketStore=SocketStore();
socketStore.socket.on('connect_error',()=>{
  Router.push('/connectivity');
});
socketStore.socket.on('reconnect_error',()=>{
  Router.push('/connectivity');
});
</script>
<template>
<div v-if="authStore.user&&authStore.user.username.length&&!socketStore.socket.disconnected">
  <div v-if="authStore.user.role=='superuser'">
    <AdminMenuComponent />
  </div>
  <div v-if="authStore.user&&authStore.user.role=='teacher'">
    <TeacherMenuComponent />
  </div>
  <div v-if="authStore.user&&authStore.user.role=='student'">
    <StudentMenuComponent />
  </div>
  <Breadcrumb :home="{icon: 'pi pi-home', to: '/'}" :model="BreadcrumbStore().$state.breadcrumb" style="margin-bottom:25px;border:0;border-radius:0;"  />
</div>
<div class="grid" id="mainGrid">
  <div class="col-10 col-offset-1 lg:col-4 lg:col-offset-0">
    <div v-if="authStore.user.role=='superuser'&&!socketStore.socket.disconnected">
      <h4 class="text-700">Quicklinks</h4>
      <AdminLeftSideView />
    </div>
  </div>
  <div class="col-10 col-offset-1 lg:col-4  lg:col-offset-0">
    <RouterView />
  </div>
  <div class="col-10 col-offset-1 lg:col-4  lg:col-offset-0">
  </div>
</div>
<ThemeComponent />
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding: 0px;
  margin: 0px;
  font-family: "Quicksand", sans-serif;
}
#mainGrid{
  margin: 0 !important;
}
a{
  text-decoration:none;
}
</style>
