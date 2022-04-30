import { School } from '../../../entities/school.entity';
import { SchoolRepository } from '../../borders/school.repository';

export class FindOneSchoolInteractor {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  public findOneSchool(id: number): Promise<School> {
    return this.schoolRepository.findOne(id);
  }
}
