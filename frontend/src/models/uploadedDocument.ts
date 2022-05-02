import { Citizen } from "./citizen";

export interface UploadedDocument {
  id: number;
  location: string;
  //uploader: User;
  timestamp: number;
  citizens: Citizen[];
  //activities: Activity[];
  created_at: Date;
  updated_at: Date;
}