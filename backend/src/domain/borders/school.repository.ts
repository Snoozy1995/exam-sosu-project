import { School } from 'src/entities/school.entity';

export interface SchoolRepository {
  save(school: School): Promise<School>;
  findAll(): Promise<School[]>;
  findOne(id: number): Promise<School>;
}
