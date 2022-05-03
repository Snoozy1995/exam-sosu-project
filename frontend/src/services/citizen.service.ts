import { AxiosResponse } from "axios";
import type { Citizen } from "../models/Citizen";
import httpClient from "./http.client";

export class CitizenService {

  createCitizen(citizen: any) : Promise<AxiosResponse<Citizen>> {
    console.log(citizen);
    console.log("Sending citizen create request");
    return httpClient.post<Citizen>("/citizens",citizen);
  }
}