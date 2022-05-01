import { FS3 } from 'src/entities/fs3.entity';

export interface FS3Repository {
  save(FS3: FS3): Promise<FS3>;
  findAll(): Promise<FS3[]>;
  findOne(id: number): Promise<FS3>;
}
