import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {Citizen} from '../../entities/citizen.entity';
import {CitizenRepository} from '../../domain/borders/citizen.repository';

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
    return this.citizenRepo.find({ relations: ['address', 'files'] });
  }

  findOne(id: number | string): Promise<Citizen> {
    return this.citizenRepo.findOne(id, {
      relations: [
        'address',
        'children',
        'parent',
        'medicines',
        'files',
        'fs3',
        'user',
        'group',
      ],
    });
  }

  search(query: string): Promise<Citizen[]> {
    return this.citizenRepo.find({
      where: [{ firstName: query }, { lastName: query }],
    });
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.citizenRepo.delete(id);
    return Promise.resolve(Boolean(res.affected));
  }

  /*newVersion(citizen: Citizen): Promise<Citizen> {
    citizen.id = undefined;
    return this.citizenRepo.save(citizen);
  }*/
}
