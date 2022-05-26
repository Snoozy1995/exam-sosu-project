import {defineStore} from "pinia";
import { Citizen } from "../models/citizen";
import {CitizenService} from "../services/citizen.service";
import {AddressStore} from "./addressStore";

const citizenService: CitizenService = new CitizenService();

export const CitizenStore = defineStore({
  id: "citizenStore",
  state:()=>({
    citizen:{
      firstName:'',
      lastName:'',
      birthday:'',
      civilStatus:'',
      address:{
        street:'',
        postCode:'',
        city:'',
      }
    },
    viewingCitizen:{} as Citizen
  }),
  actions: {
    createCitizen() {
      this.citizen.address.street=AddressStore().street;
      this.citizen.address.postCode=AddressStore().postCode;
      return new Promise((resolve, reject) => {
        citizenService
          .saveCitizen(this.citizen).then(res=>{
            if(res.status==201||res.status==200){
              resolve(res.data as Citizen);
            }
            reject(res.statusText);
          })
      });
    },
  },
});
