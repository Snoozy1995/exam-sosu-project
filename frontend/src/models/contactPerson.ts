import { Address } from "./address";

export interface ContactPerson {
  id: number;
  name: string;
  primaryContact: boolean;
  address: Address;
  created_at: Date;
  updated_at: Date;
}