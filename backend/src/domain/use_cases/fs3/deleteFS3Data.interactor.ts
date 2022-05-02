import { FS3Data } from '../../../entities/fs3Data.entity';
import { FS3DataRepository } from '../../borders/fs3Data.repository';

export class DeleteFS3DataInteractor {
  constructor(private readonly FS3DataRepository: FS3DataRepository) {}

  public deleteFS3Data(fs3: FS3Data): Promise<FS3Data> {
    return this.FS3DataRepository.delete(fs3);
  }
}
