import { FS3DataRepository } from 'src/domain/borders/FS3Data.repository';
import { FS3Data } from 'src/entities/FS3Data.entity';

export class DeleteFS3DataInteractor {
  constructor(private readonly FS3DataRepository: FS3DataRepository) {}

  public deleteFS3Data(fs3: FS3Data): Promise<FS3Data> {
    return this.FS3DataRepository.delete(fs3);
  }
}
