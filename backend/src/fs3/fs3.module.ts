import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FS3Repository } from 'src/domain/borders/FS3.repository';
import { FindAllFS3Interactor } from 'src/domain/use_cases/fs3/findAllFS3.interactor';
import { FindFS3ByTypeInteractor } from 'src/domain/use_cases/fs3/findFS3ByType.interactor';
import { FindOneFS3Interactor } from 'src/domain/use_cases/fs3/findOneFS3.interactor';
import { GetFS3TypesInteractor } from 'src/domain/use_cases/fs3/getFS3Types.interactor';
import { SaveFS3Interactor } from 'src/domain/use_cases/fs3/saveFS3.interactor';
import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Type } from 'src/entities/fs3Type.entity';
import { FS3RepositoryAdapter } from 'src/infrastructure/typeorm/fs3Repository.adapter';
import { FS3Controller } from './fs3.controller';
const repo = 'FS3Repository';
const inject = { inject: [repo] };

@Module({
  imports: [TypeOrmModule.forFeature([FS3Data, FS3Type])],
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
      provide: 'FindOneFS3',
      useFactory: (FS3Repo: FS3Repository) => new FindOneFS3Interactor(FS3Repo),
    },
    {
      ...inject,
      provide: 'FindAllFS3',
      useFactory: (FS3Repo: FS3Repository) => new FindAllFS3Interactor(FS3Repo),
    },
    {
      ...inject,
      provide: 'FindFS3ByType',
      useFactory: (FS3Repo: FS3Repository) =>
        new FindFS3ByTypeInteractor(FS3Repo),
    },
    {
      ...inject,
      provide: 'GetFS3Types',
      useFactory: (FS3Repo: FS3Repository) =>
        new GetFS3TypesInteractor(FS3Repo),
    },
  ],
  controllers: [FS3Controller],
})
export class FS3Module {}
