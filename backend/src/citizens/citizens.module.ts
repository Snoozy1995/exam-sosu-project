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
import { DeleteCitizenInteractor } from 'src/domain/use_cases/citizen/deleteCitizen.interactor';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen])],
  providers: [
    CitizensGateway,
    {
      provide: 'CitizenRepository',
      useClass: CitizenRepositoryAdapter,
    },
    {
      inject: ['CitizenRepository'],
      provide: 'SaveCitizen',
      useFactory: (userRepo: CitizenRepository) =>
        new SaveCitizenInteractor(userRepo),
    },
    {
      inject: ['CitizenRepository'],
      provide: 'SearchCitizen',
      useFactory: (userRepo: CitizenRepository) =>
        new SearchCitizenInteractor(userRepo),
    },
    {
      inject: ['CitizenRepository'],
      provide: 'FindOneCitizen',
      useFactory: (userRepo: CitizenRepository) =>
        new FindOneCitizenInteractor(userRepo),
    },
    {
      inject: ['CitizenRepository'],
      provide: 'FindAllCitizen',
      useFactory: (userRepo: CitizenRepository) =>
        new FindAllCitizenInteractor(userRepo),
    },
    {
      inject: ['CitizenRepository'],
      provide: 'DeleteCitizen',
      useFactory: (userRepo: CitizenRepository) =>
        new DeleteCitizenInteractor(userRepo),
    },
  ],
  controllers: [CitizensController],
})
export class CitizensModule {}
