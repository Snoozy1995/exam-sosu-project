import {FS3} from 'src/entities/fs3.entity';
import {FS3Repository} from '../../borders/fs3.repository';

export class FindAllFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findAllFS3(): Promise<FS3[]> {
    return this.FS3Repository.findAll();
  }
}
