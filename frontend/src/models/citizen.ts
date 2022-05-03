import { Address } from "./address";
import { ContactPerson } from "./contactPerson";
import { FS3Data } from "./fs3Data";
import { Medicine } from "./medicine";
import { UploadedDocument } from "./uploadedDocument";

export interface Citizen {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  civilStatus: string;
  address: Address;
  files: UploadedDocument[];
  medicines: Medicine[];
  contactPersons: ContactPerson[];
  copyOf: Citizen;
  parent: Citizen;
  children: Citizen[];
  fs3: FS3Data[];
  //user: User;
  //group: WorkGroup;
  //school: School;
  //activities: Activity[];
  created_at: Date;
  updated_at: Date;
}