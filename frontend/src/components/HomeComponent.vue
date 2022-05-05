<script setup lang="ts">
import AdminHome from "./admin/AdminHome.vue";
import TeacherHome from "./teacher/TeacherHome.vue";
import StudentHome from "./student/StudentHome.vue";
import { AuthStore } from '../stores/authStore';
const authStore=AuthStore();
//@todo use enums for below
</script>
<template>
  <div v-if="authStore.user&&authStore.user.role=='superuser'">
    <AdminHome />
  </div>
  <div v-if="authStore.user&&authStore.user.role=='teacher'">
    <TeacherHome />
  </div>
  <div v-if="authStore.user&&authStore.user.role=='student'">
    <StudentHome />
  </div>
</template>

<style scoped>

</style>