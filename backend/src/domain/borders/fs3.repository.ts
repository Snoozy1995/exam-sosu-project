import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Type } from 'src/entities/fs3Type.entity';

export interface FS3Repository {
  save(FS3: FS3Data): Promise<FS3Data>;
  findAll(): Promise<FS3Data[]>;
  findOne(id: number): Promise<FS3Data>;
  getTypes(): Promise<FS3Type[]>;
  findByType(type: FS3Type): Promise<FS3Data[]>;
}
