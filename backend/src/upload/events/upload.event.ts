import { UploadedDocument } from 'src/entities/uploadedDocument.entity';

export class UploadEvent {
  uploaded: UploadedDocument[];
  citizenId: number;
}
