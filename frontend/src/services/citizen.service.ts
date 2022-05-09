import { AxiosResponse } from "axios";
import { Citizen } from "../models/citizen";
import httpClient from "./http.client";

export class CitizenService {

  saveCitizen(citizen: any) : Promise<AxiosResponse<Citizen>> {
    return httpClient.post<Citizen>("/citizens",citizen);
  }

  cloneCitizen(id: any){
    return httpClient.get('/citizens/version/'+id);
  }

  getCitizen(id: any){
    return httpClient.get('/citizens/'+id);
  }
}