import {UploadedDocument} from 'src/entities/uploadedDocument.entity';

export interface UploadedDocumentRepository {
  save(document: UploadedDocument): Promise<UploadedDocument>;
  saveAll(document: UploadedDocument[]): Promise<UploadedDocument[]>;
}
