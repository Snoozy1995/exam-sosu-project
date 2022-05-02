import { FS3 } from 'src/entities/fs3.entity';
import { FS3Repository } from '../../borders/fs3.repository';

export class FindFS3ByTermInteractor {
  constructor(private readonly FS3Repository: FS3Repository) {}

  public findFS3ByTerm(term: string): Promise<FS3[]> {
    return this.FS3Repository.findFS3ByTerm(term);
  }
}
