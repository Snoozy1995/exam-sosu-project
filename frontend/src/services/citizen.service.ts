import type { Citizen } from "../models/Citizen";
import httpClient from "./http.client";

export class CitizenService {

  createCitizen(chat: Citizen) {
    httpClient.post<Citizen>("/citizens",chat);
  }
}