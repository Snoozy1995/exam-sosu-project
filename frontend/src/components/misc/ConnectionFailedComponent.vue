<script lang="ts">
import Router from "../../router";
import { AuthStore } from "../../stores/authStore";
export default {
    timer:0,
    beforeUnmount(){
      clearInterval(this.timer)
    },
    mounted(){
      this.timer=setInterval(()=>{
              let authStore=AuthStore();
              authStore.getProfile().then(()=>{
                Router.push('/')
              });
          },15000)
    }
}
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8" style="margin-top:100px;">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-vue"></i>&nbsp;Sundhedsjournalen</div>
        <div class="text-700 text-2xl mb-5">Vi beklager men der er problemer med at skabe forbindelse til vores netværk.</div>
        <div class="text-700 text-2 mb-5">Vent venligst og prøv igen, du kan vente her og siden vil automatisk ændre hvis forbindelsen kommer igen.</div>
        
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i><br><br><br>
    </div>
  </div>
</template>

<style scoped>
</style>
