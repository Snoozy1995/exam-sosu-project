import { FS3Type } from 'src/entities/fs3Type.entity';
import { FS3Repository } from '../../borders/FS3.repository';

export class GetFS3TypesInteractor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public getFS3Types(): Promise<FS3Type[]> {
    return this.FS3Repository.getTypes();
  }
}
