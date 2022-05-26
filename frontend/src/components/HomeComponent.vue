<script setup lang="ts">
import AdminHomeComponent from "./admin/AdminHomeComponent.vue";
import TeacherHome from "./teacher/TeacherHome.vue";
import StudentHome from "./student/StudentHome.vue";
import {AuthStore} from '../stores/authStore';

const authStore=AuthStore();
const Roles= Object.freeze({ SuperUser: 'superuser', Teacher: 'teacher', Student: 'student' });//@todo move to own enum file
</script>
<template>
  <div v-if="authStore.user&&authStore.user.role==Roles.SuperUser">
    <AdminHomeComponent />
  </div>
  <div v-if="authStore.user&&authStore.user.role==Roles.Teacher">
    <TeacherHome />
  </div>
  <div v-if="authStore.user&&authStore.user.role==Roles.Student">
    <StudentHome />
  </div>
</template>

<style scoped>

</style>
