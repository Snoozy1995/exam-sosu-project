import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class SaveFS3Interactor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public saveFS3(FS3: FS3Data): Promise<FS3Data> {
    return this.FS3Repository.save(FS3);
  }
}
