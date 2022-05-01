import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FS3DataRepository } from 'src/domain/borders/FS3Data.repository';
import { FS3Data } from 'src/entities/fs3Data.entity';

@Injectable()
export class FS3RepositoryAdapter implements FS3DataRepository {
  private readonly FS3DataRepo: Repository<FS3Data>;

  constructor(private readonly em: EntityManager) {
    this.FS3DataRepo = em.getRepository(FS3Data);
  }

  save(FS3: FS3Data): Promise<FS3Data> {
    return this.FS3DataRepo.save(FS3);
  }

  delete(FS3: FS3Data): Promise<FS3Data> {
    return this.FS3DataRepo.remove(FS3);
  }
}
