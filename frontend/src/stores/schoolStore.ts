import { defineStore } from "pinia";
import { SchoolService } from "../services/school.service";
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
    async createSchool(){
      //let res=await authService.createUser(username,password,role);
      return new Promise((resolve)=>{
        //@todo
      })
    },
  }
});