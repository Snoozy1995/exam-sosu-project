//import { Citizen } from "./citizen";

export interface Medicine {
  id: number;
  //citizen: Citizen;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  created_at: Date;
  updated_at: Date;
}