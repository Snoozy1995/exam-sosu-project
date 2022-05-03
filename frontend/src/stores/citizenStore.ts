import { defineStore } from "pinia";
import { Citizen } from "../models/citizen";
import { CitizenService } from "../services/citizen.service";
import { AddressStore } from "./addressStore";

const citizenService: CitizenService = new CitizenService();

export const CitizenStore = defineStore({
  id: "citizenStore",
  state:()=>({
    citizen:{
      firstName:'',
      lastName:'',
      birthDate:undefined,
      civilStatus:'',
      address:{
        street:'',
        postCode:'',
        city:'',
      }
    }
  }),
  actions: {
    createCitizen(citizen: Citizen) {
      this.citizen.address.street=AddressStore().street;
      this.citizen.address.postCode=AddressStore().postCode;
      return new Promise((resolve, reject) => {
        citizenService
          .createCitizen(citizen)
          //.then((user) => {
          //  this.loggedInUser = user;
          //  resolve(true);
          //})
          //.catch((err) => {
          //  reject(err);
          //});
      });
    },
  },
});