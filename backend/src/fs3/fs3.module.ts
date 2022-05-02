import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FS3Repository } from '../domain/borders/fs3.repository';
import { FindAllFS3Interactor } from '../domain/use_cases/fs3/findAllFS3.interactor';
import { FindFS3ByTermInteractor } from '../domain/use_cases/fs3/findFS3ByTerm.interactor';
import { SaveFS3Interactor } from '../domain/use_cases/fs3/saveFS3.interactor';
import { FS3 } from '../entities/fs3.entity';
import { FS3Term } from '../entities/fs3Term.entity';
import { FS3RepositoryAdapter } from '../infrastructure/typeorm/fs3Repository.adapter';
import { FS3Controller } from './fs3.controller';
const repo = 'FS3Repository';
const inject = { inject: [repo] };

@Module({
  imports: [TypeOrmModule.forFeature([FS3, FS3Term])],
  providers: [
    {
      provide: repo,
      useClass: FS3RepositoryAdapter,
    },
    {
      ...inject,
      provide: 'SaveFS3',
      useFactory: (FS3Repo: FS3Repository) => new SaveFS3Interactor(FS3Repo),
    },
    {
      ...inject,
      provide: 'FindFS3ByTerm',
      useFactory: (FS3Repo: FS3Repository) =>
        new FindFS3ByTermInteractor(FS3Repo),
    },
    {
      ...inject,
      provide: 'FindAllFS3',
      useFactory: (FS3Repo: FS3Repository) => new FindAllFS3Interactor(FS3Repo),
    },
  ],
  controllers: [FS3Controller],
})
export class FS3Module {}
