import type { Citizen } from "../models/Citizen";
import httpClient from "./http.client";

export class CitizenService {

  createCitizen(citizen: Citizen) {
    httpClient.post<Citizen>("/citizens",citizen);
  }
}