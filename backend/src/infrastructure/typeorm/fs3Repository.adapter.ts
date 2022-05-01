import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FS3Repository } from 'src/domain/borders/FS3.repository';
import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Type } from 'src/entities/fs3Type.entity';

@Injectable()
export class FS3RepositoryAdapter implements FS3Repository {
  private readonly FS3Repo: Repository<FS3Data>;
  private readonly FS3TypeRepo: Repository<FS3Type>;

  constructor(private readonly em: EntityManager) {
    this.FS3Repo = em.getRepository(FS3Data);
    this.FS3TypeRepo = em.getRepository(FS3Type);
  }

  save(FS3: FS3Data): Promise<FS3Data> {
    return this.FS3Repo.save(FS3);
  }

  findAll(): Promise<FS3Data[]> {
    return this.FS3Repo.find();
  }

  findOne(id: number): Promise<FS3Data> {
    return this.FS3Repo.findOne({
      where: {
        id: { id: id },
      },
    });
  }

  getTypes(): Promise<FS3Type[]> {
    return this.FS3TypeRepo.find();
  }
  findByType(type: FS3Type): Promise<FS3Data[]> {
    return this.FS3Repo.find({ type: type });
  }
}
