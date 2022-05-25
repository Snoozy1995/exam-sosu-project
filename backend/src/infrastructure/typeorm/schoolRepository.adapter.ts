import {EntityManager, ILike, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {School} from '../../entities/school.entity';
import {SchoolRepository} from '../../domain/borders/school.repository';

@Injectable()
export class SchoolRepositoryAdapter implements SchoolRepository {
  private readonly schoolRepo: Repository<School>;

  constructor(private readonly em: EntityManager) {
    this.schoolRepo = em.getRepository(School);
  }

  save(school: School): Promise<School> {
    return this.schoolRepo.save(school);
  }

  findAll(): Promise<School[]> {
    return this.schoolRepo.find();
  }

  autocomplete(query: string): Promise<School[]> {
    return this.schoolRepo.find({ name: ILike(`%${query}%`) });
  }

  findOne(id: string): Promise<School> {
    return this.schoolRepo.findOne(id, {
      relations: ['classes'],
    });
  }
}
