import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Citizen } from '../../entities/citizen.entity';
import { CitizenRepository } from '../../domain/borders/citizen.repository';

@Injectable()
export class CitizenRepositoryAdapter implements CitizenRepository {
  private readonly citizenRepo: Repository<Citizen>;

  constructor(private readonly em: EntityManager) {
    this.citizenRepo = em.getRepository(Citizen);
  }

  save(citizen: Citizen): Promise<Citizen> {
    return this.citizenRepo.save(citizen);
  }

  findAll(): Promise<Citizen[]> {
    return this.citizenRepo.find();
  }

  findOne(id: number): Promise<Citizen> {
    return this.citizenRepo.findOne({
      where: {
        id: { id: id },
      },
    });
  }
}
