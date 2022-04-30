import { School } from '../../../entities/school.entity';
import { SchoolRepository } from '../../borders/school.repository';

export class SaveSchoolInteractor {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  public saveSchool(school: School): Promise<School> {
    return this.schoolRepository.save(school);
  }
}
