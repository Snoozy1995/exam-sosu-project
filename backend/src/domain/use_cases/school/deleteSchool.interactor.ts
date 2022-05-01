import { School } from '../../../entities/school.entity';
import { SchoolRepository } from '../../borders/school.repository';

export class DeleteSchoolInteractor {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  public deleteSchool(): Promise<School[]> {
    //return this.schoolRepository.findAll();
    return null; //@todo
  }
}
