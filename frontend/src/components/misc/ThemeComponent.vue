<script setup lang="ts">
import { ref } from '@vue/runtime-dom';
import Dropdown from 'primevue/dropdown';
const selectedTheme=ref({
        name: "Lara light indigo",
        code: "lara-light-indigo",
        dark: false
      });
const themes= [
        { name: "Lara light (Default)", code: "lara-light-indigo", dark:false },
        //{ name: "Lara dark", code: "lara-dark-indigo", dark:true },
        { name: "Fluent", code: 'fluent-light',dark:false },
        { name: "Material light", code:'mdc-light-deeppurple',dark:false },
        { name: "Material dark", code:'mdc-dark-deeppurple',dark:true },
        { name: "Luna", code: 'luna-green',dark:true },
        { name: "Arya", code: "arya-orange",dark:true },
        { name: "Nova", code:"nova-vue",dark:false},
        { name: "Vela", code:"vela-blue",dark:true},
      ];
function changeTheme(theme: string,dark:boolean): void {
  localStorage.setItem("theme", JSON.stringify(selectedTheme.value));
  let themeElement = document.getElementById("theme-link");
  if (themeElement == null) return;
  themeElement.setAttribute(
    "href",
    "https://unpkg.com/primevue/resources/themes/" + theme + "/theme.css"
  );
  if(dark){
    let bg = document.getElementById("body");
    if (bg == null) return;
    bg.setAttribute("style","background:black;");
  }else{
    let bg = document.getElementById("body");
    if (bg == null) return;
    bg.setAttribute("style","background:white;");
  }
}

const theme = localStorage.getItem("theme");
if (theme != null) {
  const themeObject = JSON.parse(theme);
  selectedTheme.value.name = themeObject.name;
  selectedTheme.value.code = themeObject.code;
  selectedTheme.value.dark = themeObject.dark;
  changeTheme(selectedTheme.value.code,selectedTheme.value.dark);
}
</script>
<template>
<Dropdown
    v-model="selectedTheme"
    :options="themes"
    optionLabel="name"
    placeholder="Themes"
    @change="changeTheme(selectedTheme.code,selectedTheme.dark)"
    style="width:200px;position:fixed;bottom:25px; left:10px;"
  />
</template>