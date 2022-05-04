import { defineStore } from "pinia";

export const BreadcrumbStore = defineStore({
  id: "breadcrumbStore",
  state: ()=>({
    breadcrumb:[]
  }),
  actions:{
    set(state:any){
      this.$state.breadcrumb=[];
      if(!state||!state.length) return;
      this.$state.breadcrumb=state;
    }
  }
});