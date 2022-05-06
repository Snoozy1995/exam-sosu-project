import { Citizen } from "./citizen";
import { School } from "./school";
import { UploadedDocument } from "./uploadedDocument";

export interface User {
  username: string;
  role: string;
  created_at: string;
  updated_at: string;
  files: UploadedDocument[];
  school: School;
  //classes: SchoolClass[];
  citizens: Citizen[];
}