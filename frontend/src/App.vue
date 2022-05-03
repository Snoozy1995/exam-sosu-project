<script setup lang="ts">
import MenuComponent from './components/MenuComponent.vue';
import Breadcrumb from 'primevue/breadcrumb';
</script>
<script lang="ts">
function changeTheme(theme: string): void {
  let themeElement = document.getElementById("theme-link");
  if (themeElement == null) return;
  themeElement.setAttribute(
    "href",
    "https://unpkg.com/primevue/resources/themes/" + theme + "/theme.css"
  );
}
export default {
  data() {
    return {
      home: {icon: 'pi pi-home', to: '/'},
      items: [
          {label: 'Computer'},
          {label: 'Notebook'},
          {label: 'Accessories'},
          {label: 'Backpacks'},
          {label: 'Item'}
      ],
      selectedTheme: {
        name: "Lara light indigo",
        code: "lara-light-indigo",
      },
      themes: [
        { name: "Lara light (Default)", code: "lara-light-indigo" },
        //{ name: "Fluent", code: "fluent-light" },
        { name: "Bootstrap", code: "bootstrap4-light-blue"},
        //{ name: "MD", code: "md-light-indigo" },
        { name: "Material", code: "mdc-light-indigo" },
        { name: "Rhea", code: "rhea" },
        { name: "Tailwind", code: "tailwind-light" },
        { name: "Nova", code:"nova-vue"}
      ],
    };
  },
  created() {
    const theme = localStorage.getItem("theme");
    if (theme != null) {
      const themeObject = JSON.parse(theme);
      //this.selectedTheme = themeObject;
    }
  },
  watch: {
    selectedTheme: {
      handler(oldVal: { code: any; }) {
        localStorage.setItem("theme", JSON.stringify(oldVal));
        changeTheme(oldVal.code);
      },
      deep: true,
    },
  },
};
</script>
<template>
<MenuComponent></MenuComponent>
<Breadcrumb :home="home" :model="items" style="margin-bottom:25px;" />
<div class="grid">
  <div class="col-12 lg:col-4">

  </div>
  <div class="col-12 lg:col-4">
    <RouterView />
  </div>
</div>
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
  background: #f1f2f6;
}
</style>
