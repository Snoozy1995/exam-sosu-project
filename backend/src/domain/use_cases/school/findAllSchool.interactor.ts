import { School } from '../../../entities/school.entity';
import { SchoolRepository } from '../../borders/school.repository';

export class FindAllSchoolInteractor {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  public findAllSchool(): Promise<School[]> {
    return this.schoolRepository.findAll();
  }
}
