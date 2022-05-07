import { Citizen } from "./citizen";
import { User } from "./user";

export interface UploadedDocument {
  id: number;
  location: string;
  uploader: User;
  timestamp: number;
  citizens: Citizen[];
  //activities: Activity[];
  created_at: Date;
  updated_at: Date;
}