import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class FindOneFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findOneFS3(id: number): Promise<FS3Data> {
    return this.FS3Repository.findOne(id);
  }
}
