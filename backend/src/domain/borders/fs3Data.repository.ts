import { FS3Data } from 'src/entities/fs3Data.entity';

export interface FS3DataRepository {
  save(FS3: FS3Data): Promise<FS3Data>;
  delete(FS3: FS3Data): Promise<FS3Data>;
}
