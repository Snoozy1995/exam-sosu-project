import { Citizen } from "./citizen";
import { FS3 } from "./fs3";

export interface FS3Data {
  id: number;
  fs3: FS3;
  citizen: Citizen;
  //activity: Activity;
  input: string;
  functionalAbility: number;
  created_at: Date;
  updated_at: Date;
}