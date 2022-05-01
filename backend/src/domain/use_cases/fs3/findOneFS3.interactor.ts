import { FS3 } from 'src/entities/fs3.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class FindOneFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findOneFS3(id: number): Promise<FS3> {
    return this.FS3Repository.findOne(id);
  }
}
