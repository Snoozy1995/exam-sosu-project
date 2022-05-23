import {FS3} from '../../entities/fs3.entity';

export interface FS3Repository {
  save(FS3: FS3): Promise<FS3>;
  findAll(): Promise<FS3[]>;
  findFS3ByTerm(term: string): Promise<FS3[]>;
}
