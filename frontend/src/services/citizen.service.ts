import axios, {AxiosResponse} from "axios";
import {Citizen} from "../models/citizen";

export class CitizenService {

  saveCitizen(citizen: any) : Promise<AxiosResponse<Citizen>> {
    return axios.post<Citizen>("/citizens",citizen);
  }

  cloneCitizen(id: any){
    return axios.get('/citizens/version/'+id);
  }

  getCitizen(id: any):Promise<AxiosResponse<Citizen>>{
    if(!id) return new Promise((res,rej)=>rej({status:400}));
    return axios.get('/citizens/'+id);
  }

  getAllCitizens(){
    return axios.get('/citizens/');
  }

}
