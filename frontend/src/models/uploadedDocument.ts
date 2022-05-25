import {Citizen} from "./citizen";
import {User} from "./user";

export interface UploadedDocument {
  id: number;
  filename: string;
  size: number;
  uploader: User;
  originalname: string;
  timestamp: number;
  citizens: Citizen[];
  //activities: Activity[];
  created_at: Date;
  updated_at: Date;
}
