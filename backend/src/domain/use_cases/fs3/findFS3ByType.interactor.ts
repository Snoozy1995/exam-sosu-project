import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Type } from 'src/entities/fs3Type.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class FindFS3ByTypeInteractor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findFS3ByType(type: FS3Type): Promise<FS3Data[]> {
    return this.FS3Repository.findByType(type);
  }
}
