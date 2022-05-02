import { FS3DataRepository } from 'src/domain/borders/FS3Data.repository';
import { FS3Data } from 'src/entities/FS3Data.entity';

export class SaveFS3DataInteractor {
  constructor(private readonly FS3DataRepository: FS3DataRepository) {}

  public saveFS3Data(fs3: FS3Data): Promise<FS3Data> {
    return this.FS3DataRepository.save(fs3);
  }
}
