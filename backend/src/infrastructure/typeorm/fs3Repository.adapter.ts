import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FS3Repository } from 'src/domain/borders/FS3.repository';
import { FS3Data } from 'src/entities/fs3Data.entity';

@Injectable()
export class FS3DataRepositoryAdapter implements FS3Repository {
  private readonly FS3Repo: Repository<FS3Data>;

  constructor(private readonly em: EntityManager) {
    this.FS3Repo = em.getRepository(FS3Data);
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
}
