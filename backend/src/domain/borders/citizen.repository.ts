import { Citizen } from 'src/entities/citizen.entity';

export interface CitizenRepository {
  save(citizen: Citizen): Promise<Citizen>;
  findAll(): Promise<Citizen[]>;
  findOne(id: number): Promise<Citizen>;
}