import { Module } from '@nestjs/common';
import { CitizensController } from './citizens.controller';
import { CitizenRepositoryAdapter } from '../infrastructure/typeorm/citizenRepository.adapter';
import { Citizen } from '../entities/citizen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenRepository } from '../domain/borders/citizen.repository';
import { SaveCitizenInteractor } from '../domain/use_cases/citizen/saveCitizen.interactor';
import { FindAllCitizenInteractor } from '../domain/use_cases/citizen/findAllCitizen.interactor';
import { FindOneCitizenInteractor } from '../domain/use_cases/citizen/findOneCitizen.interactor';
import { CitizensGateway } from './citizens.gateway';
import { SearchCitizenInteractor } from '../domain/use_cases/citizen/searchCitizens.interactor';
import { DeleteCitizenInteractor } from '../domain/use_cases/citizen/deleteCitizen.interactor';
import { CloneCitizenForGroupInteractor } from 'src/domain/use_cases/citizen/cloneCitizenForGroup.interactor';
import { CloneCitizenForUserInteractor } from 'src/domain/use_cases/citizen/cloneCitizenForUser.interactor';
import { CloneCitizenInteractor } from 'src/domain/use_cases/citizen/cloneCitizen.interactor';
import { NewVersionCitizenInteractor } from 'src/domain/use_cases/citizen/newVersionCitizen.interactor';

const repo = 'CitizenRepository';
const inject = { inject: [repo] };

@Module({
  imports: [TypeOrmModule.forFeature([Citizen])],
  providers: [
    CloneCitizenInteractor,
    CitizensGateway,
    {
      provide: repo,
      useClass: CitizenRepositoryAdapter,
    },
    {
      ...inject,
      provide: 'SaveCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new SaveCitizenInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'SearchCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new SearchCitizenInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'FindOneCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new FindOneCitizenInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'FindAllCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new FindAllCitizenInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'DeleteCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new DeleteCitizenInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'CloneCitizenForGroup',
      useFactory: (citizenRepo: CitizenRepository) =>
        new CloneCitizenForGroupInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'CloneCitizenForUser',
      useFactory: (citizenRepo: CitizenRepository) =>
        new CloneCitizenForUserInteractor(citizenRepo),
    },
    {
      ...inject,
      provide: 'NewVersionCitizen',
      useFactory: (citizenRepo: CitizenRepository) =>
        new NewVersionCitizenInteractor(citizenRepo),
    },
  ],
  controllers: [CitizensController],
})
export class CitizensModule {}
