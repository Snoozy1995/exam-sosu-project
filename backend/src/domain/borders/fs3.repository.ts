import { FS3Data } from 'src/entities/fs3Data.entity';

export interface FS3Repository {
  save(FS3: FS3Data): Promise<FS3Data>;
  findAll(): Promise<FS3Data[]>;
  findOne(id: number): Promise<FS3Data>;
}
