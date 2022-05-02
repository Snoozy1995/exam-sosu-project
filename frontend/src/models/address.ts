import { City } from "./city";

export interface Address {
  id: number;
  street: string;
  note: string;
  city: City;
  created_at: Date;
  updated_at: Date;
}