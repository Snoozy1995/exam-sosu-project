import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UploadedDocumentRepository } from '../../domain/borders/uploadedDocument.repository';
import { UploadedDocument } from 'src/entities/uploadedDocument.entity';

@Injectable()
export class UploadedDocumentRepositoryAdapter
  implements UploadedDocumentRepository
{
  private readonly uploadRepo: Repository<UploadedDocument>;

  constructor(private readonly em: EntityManager) {
    this.uploadRepo = em.getRepository(UploadedDocument);
  }

  save(uploadedDocument: UploadedDocument): Promise<UploadedDocument> {
    return this.uploadRepo.save(uploadedDocument);
  }
  saveAll(uploadedDocument: UploadedDocument[]): Promise<UploadedDocument[]> {
    return this.uploadRepo.save(uploadedDocument);
  }
}
