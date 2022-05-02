import { Address } from "./address";

export interface ContactPerson {
  id: number;
  name: string;
  primaryContact: boolean;
  address: Address;
  //citizen: Citizen;
  created_at: Date;
  updated_at: Date;
}