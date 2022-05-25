import {FS3} from 'src/entities/fs3.entity';
import {FS3Repository} from '../../borders/fs3.repository';

export class SaveFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public saveFS3(FS3: FS3): Promise<FS3> {
    return this.FS3Repository.save(FS3);
  }
}
