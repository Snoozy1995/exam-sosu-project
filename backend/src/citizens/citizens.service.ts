import { Injectable } from '@nestjs/common';
import { Citizen } from '../entities/citizen.entity';

@Injectable()
export class CitizensService {
  create(citizen: Citizen) {
    //@todo
    return citizen;
  }

  findAll(): Citizen[] {
    //@todo
    return null;
  }

  findOne(id: number): Citizen {
    //@todo
    return null;
  }
}
