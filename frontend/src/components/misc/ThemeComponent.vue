<script setup lang="ts">
import {ref} from '@vue/runtime-dom';
import Dropdown from 'primevue/dropdown';

const selectedTheme=ref({
        name: "Material light",
        code: "mdc-light-deeppurple"
      });
const themes= [
        { name: "Material light (Default)", code:'mdc-light-deeppurple' },
        { name: "Fluent", code: 'fluent-light' },
        { name: "Material dark", code:'mdc-dark-indigo' },
        { name: "Luna", code: 'luna-amber' },
        { name: "Arya", code: "arya-green" },
        { name:"Bootstrap", code: "bootstrap4-light-blue"},
        { name: "Nova", code:"nova-alt"},
        { name: "Vela", code:"vela-blue"},
        { name: "Tailwind", code:"tailwind-light" },
        { name: "Lara dark", code:"lara-dark-indigo"}
      ];
function changeTheme(theme: string): void {
  localStorage.setItem("theme", JSON.stringify(selectedTheme.value));
  let themeElement = document.getElementById("theme-link");
  if (themeElement == null) return;
  themeElement.setAttribute(
    "href",
    "https://unpkg.com/primevue/resources/themes/" + theme + "/theme.css"
  );
}

const theme = localStorage.getItem("theme");
if (theme != null) {
  const themeObject = JSON.parse(theme);
  selectedTheme.value.name = themeObject.name;
  selectedTheme.value.code = themeObject.code;
  changeTheme(selectedTheme.value.code);
}
</script>
<template>
<Dropdown
    v-model="selectedTheme"
    :options="themes"
    optionLabel="name"
    placeholder="Themes"
    @change="changeTheme(selectedTheme.code)"
    style="width:200px;position:fixed;bottom:25px; left:10px;z-index:9999;"
  />
</template>
<style>
.p-listbox .p-listbox-list{
  padding:0px;
}
</style>
