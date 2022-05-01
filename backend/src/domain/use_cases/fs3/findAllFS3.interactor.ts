import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class FindAllFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findAllFS3(): Promise<FS3Data[]> {
    return this.FS3Repository.findAll();
  }
}
