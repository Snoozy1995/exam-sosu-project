import axios, {AxiosResponse} from "axios";
import {FS3Data} from "../models/fs3Data";

export class Fs3DataService {

    getFS3Data():Promise<any>{
        return axios.get("/fs3Data");
    }

    createFS3Data(fs3Data: any):Promise<AxiosResponse>{
        return axios.post<FS3Data>("/fs3Data/create", fs3Data);
    }

}
