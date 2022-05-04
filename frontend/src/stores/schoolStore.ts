import { defineStore } from "pinia";
import { SchoolService } from "../services/school.service";
import { AddressStore } from "./addressStore";
const schoolService: SchoolService = new SchoolService();
export const SchoolStore = defineStore({
  id: "schoolStore",
  state: ()=>({
    school:{
      name:'',
      address:{
        street:'',
        postCode:'',
        city:'',
      }
    },
    suggestions:[]
  }),
  actions:{
    createSchool(){
      this.school.address.street=AddressStore().street;
      this.school.address.postCode=AddressStore().postCode;
      return schoolService.save(this.school);
    },
  }
});