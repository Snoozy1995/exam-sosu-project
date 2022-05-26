import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutocompleteSchoolInteractor } from 'src/domain/use_cases/school/autocompleteSchool.interactor';
import { DeleteSchoolInteractor } from 'src/domain/use_cases/school/deleteSchool.interactor';
import { SchoolRepository } from '../domain/borders/school.repository';
import { FindAllSchoolInteractor } from '../domain/use_cases/school/findAllSchool.interactor';
import { FindOneSchoolInteractor } from '../domain/use_cases/school/findOneSchool.interactor';
import { SaveSchoolInteractor } from '../domain/use_cases/school/saveSchool.interactor';
import { School } from '../entities/school.entity';
import { SchoolRepositoryAdapter } from '../infrastructure/typeorm/schoolRepository.adapter';
import { SchoolsController } from './schools.controller';

const repo = 'SchoolRepository';
const inject = { inject: [repo] };

@Module({
  controllers: [SchoolsController],
  imports: [TypeOrmModule.forFeature([School])],
  providers: [
    {
      provide: 'SchoolRepository',
      useClass: SchoolRepositoryAdapter,
    },
    {
      ...inject,
      provide: 'SaveSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new SaveSchoolInteractor(userRepo),
    },
    {
      ...inject,
      provide: 'FindOneSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new FindOneSchoolInteractor(userRepo),
    },
    {
      ...inject,
      provide: 'FindAllSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new FindAllSchoolInteractor(userRepo),
    },
    {
      ...inject,
      provide: 'DeleteSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new DeleteSchoolInteractor(userRepo),
    },
    {
      ...inject,
      provide: 'AutocompleteSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new AutocompleteSchoolInteractor(userRepo),
    },
  ],
})
export class SchoolsModule {}
