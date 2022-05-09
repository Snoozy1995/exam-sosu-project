import { UploadedDocumentRepository } from 'src/domain/borders/uploadedDocument.repository';
import { UploadedDocument } from 'src/entities/uploadedDocument.entity';

export class SaveFilesInteractor {
  constructor(private readonly uploadRepository: UploadedDocumentRepository) {}

  public saveFiles(
    docu: UploadedDocument | UploadedDocument[],
  ): Promise<UploadedDocument | UploadedDocument[]> {
    if (Array.isArray(docu)) {
      return this.uploadRepository.saveAll(
        docu as unknown as UploadedDocument[],
      );
    } else {
      return this.uploadRepository.save(docu as unknown as UploadedDocument);
    }
  }
}
