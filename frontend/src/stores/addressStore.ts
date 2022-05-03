import { defineStore } from "pinia";

export const AddressStore = defineStore({
  id: "addressStore",
  state: ()=>({
    street:'',
    city:'',
    postCode:''
  })
});