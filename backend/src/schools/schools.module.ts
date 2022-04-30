import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolRepository } from '../domain/borders/school.repository';
import { FindAllSchoolInteractor } from '../domain/use_cases/school/findAllSchool.interactor';
import { FindOneSchoolInteractor } from '../domain/use_cases/school/findOneSchool.interactor';
import { SaveSchoolInteractor } from '../domain/use_cases/school/saveSchool.interactor';
import { School } from '../entities/school.entity';
import { SchoolRepositoryAdapter } from '../infrastructure/typeorm/schoolRepository.adapter';
import { SchoolsController } from './schools.controller';

@Module({
  controllers: [SchoolsController],
  imports: [TypeOrmModule.forFeature([School])],
  providers: [
    {
      provide: 'SchoolRepository',
      useClass: SchoolRepositoryAdapter,
    },
    {
      inject: ['SchoolRepository'],
      provide: 'SaveSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new SaveSchoolInteractor(userRepo),
    },
    {
      inject: ['SchoolRepository'],
      provide: 'FindOneSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new FindOneSchoolInteractor(userRepo),
    },
    {
      inject: ['SchoolRepository'],
      provide: 'FindAllSchool',
      useFactory: (userRepo: SchoolRepository) =>
        new FindAllSchoolInteractor(userRepo),
    },
  ],
})
export class SchoolsModule {}
