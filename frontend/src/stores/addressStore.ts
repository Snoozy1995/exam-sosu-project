import {defineStore} from "pinia";

export const AddressStore = defineStore({
  id: "addressStore",
  state: ()=>({
    street:'',
    postCode:'',


    municipality:'',
    city:'',
    suggestions:[],
    streetsuggestions:[],
  })
});
