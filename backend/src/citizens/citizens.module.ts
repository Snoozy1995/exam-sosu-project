import { Module } from '@nestjs/common';
import { CitizensController } from './citizens.controller';
import { CitizenRepositoryAdapter } from '../infrastructure/typeorm/citizenRepository.adapter';
import { Citizen } from '../entities/citizen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenRepository } from '../domain/borders/citizen.repository';
import { SaveCitizenInteractor } from '../domain/use_cases/saveCitizen.interactor';
import { FindAllCitizenInteractor } from '../domain/use_cases/findAllCitizen.interactor';
import { FindOneCitizenInteractor } from '../domain/use_cases/findOneCitizen.interactor';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen])],
  providers: [
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
  ],
  controllers: [CitizensController],
})
export class CitizensModule {}
