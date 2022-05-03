<script setup lang="ts">
import MenuComponent from './components/MenuComponent.vue';
import Breadcrumb from 'primevue/breadcrumb';
import Dropdown from 'primevue/dropdown';

const selectedTheme={
        name: "Lara light indigo",
        code: "lara-light-indigo",
        dark: false
      };
</script>
<script lang="ts">
function changeTheme(theme: string,dark:boolean): void {
  let themeElement = document.getElementById("theme-link");
  if (themeElement == null) return;
  themeElement.setAttribute(
    "href",
    "https://unpkg.com/primevue/resources/themes/" + theme + "/theme.css"
  );
  if(dark){
    let bg = document.getElementById("body");
      if (bg == null) return;
      bg.setAttribute(
        "style",
        "background:black;"
      );
  }else{
    let bg = document.getElementById("body");
  if (bg == null) return;
  bg.setAttribute(
    "style",
    "background:white;"
  );
  }
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
      themes: [
        { name: "Lara light (Default)", code: "lara-light-indigo", dark:false },
        { name: "Lara dark", code: "lara-dark-indigo", dark:true },
        //{ name: "Fluent", code: "fluent-light" },
        //{ name: "Bootstrap", code: "bootstrap4-light-blue"},
        //{ name: "MD", code: "md-light-indigo" },
        //{ name: "Material", code: "mdc-light-indigo" },
        //{ name: "Rhea", code: "rhea" },
        { name: "Arya", code: "arya-orange",dark:true },
        //{ name: "Tailwind", code: "tailwind-light" },
        { name: "Nova", code:"nova-vue",dark:false}
      ],
    };
  },
  created() {
    const theme = localStorage.getItem("theme");
    if (theme != null) {
      const themeObject = JSON.parse(theme);
      selectedTheme.name = themeObject.name;
      selectedTheme.code = themeObject.code;
      selectedTheme.dark = themeObject.dark;
    }
  },
  watch: {
    selectedTheme: {
      handler(oldVal: { name:string,code: any,dark:boolean }) {
        localStorage.setItem("theme", JSON.stringify(oldVal));
        changeTheme(oldVal.code,oldVal.dark);
      },
      deep: true,
    },
  },
};
</script>
<template>
<MenuComponent></MenuComponent>
<Breadcrumb :home="home" :model="items" style="margin-bottom:25px;border:0;border-radius:0;"  />
<Dropdown
  v-model="selectedTheme"
  :options="themes"
  optionLabel="name"
  placeholder="Themes"
  style="width:200px;position:fixed;bottom:25px; left:10px;"
/>
<div class="grid" id="mainGrid">
  <div class="col-10 col-offset-1 lg:col-4 lg:col-offset-0">

  </div>
  <div class="col-10 col-offset-1 lg:col-4  lg:col-offset-0">
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
}
#mainGrid{
  margin: 0 !important;
}
a{
  text-decoration:none;
}
</style>
