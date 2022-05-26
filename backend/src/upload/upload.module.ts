import { Module } from '@nestjs/common';
import { UploadedDocumentRepository } from 'src/domain/borders/uploadedDocument.repository';
import { SaveFilesInteractor } from 'src/domain/use_cases/upload/saveFiles.interactor';
import { UploadedDocumentRepositoryAdapter } from 'src/infrastructure/typeorm/uploadedDocumentRepository.adapter';
import { UploadController } from './upload.controller';

const repo = 'UploadedDocumentRepository';
const inject = { inject: [repo] };

@Module({
  controllers: [UploadController],
  providers: [
    {
      provide: repo,
      useClass: UploadedDocumentRepositoryAdapter,
    },
    {
      ...inject,
      provide: 'SaveFiles',
      useFactory: (uploadRepo: UploadedDocumentRepository) =>
        new SaveFilesInteractor(uploadRepo),
    },
  ],
})
export class UploadModule {}
