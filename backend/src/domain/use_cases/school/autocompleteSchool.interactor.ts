import { School } from '../../../entities/school.entity';
import { SchoolRepository } from '../../borders/school.repository';

export class AutocompleteSchoolInteractor {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  public autocompleteSchool(query: string): Promise<School[]> {
    return this.schoolRepository.autocomplete(query);
  }
}
