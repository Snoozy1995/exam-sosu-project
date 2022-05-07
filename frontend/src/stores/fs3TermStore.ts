import { defineStore } from "pinia";
import {FS3TermService} from "../services/fs3Term.service";
import {FS3Term} from "../models/fs3Term";

const fs3TermService: FS3TermService = new FS3TermService();
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
