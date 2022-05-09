import { Address } from "./address";
import { School } from "./school";
import { User } from "./user";

export interface SchoolClass {
  id:number;
  name: string;
  school: School;
  //groups: WorkGroups;
  users: User[];
  created_at:string;
  updated_at:string;
}