import { Injectable } from '@nestjs/common';
import { School } from '../entities/school.entity';

@Injectable()
export class SchoolsService {
  save(school: School) {
    //@todo
    return school;
  }

  findAll(): School[] {
    //@todo
    return null;
  }

  findOne(id: number): School {
    //@todo
    return null;
  }
}
