import { defineStore } from "pinia";
import {Fs3OptionsService} from "../services/fs3Options.service";
import {FS3Term} from "../models/fs3Term";

const fs3TermService: Fs3OptionsService = new Fs3OptionsService();
export const Fs3TermStore = defineStore({
    id: "fs3Store",
    state: ()=>({
        fs3Terms: [] as FS3Term[],
    }),
    actions:{
        // async getFS3Terms(){
        //     let res=await fs3TermService.getFS3Terms();
        //     this.fs3Term=res.data;
        //     return this.fs3Term;
        // },
    }
});
