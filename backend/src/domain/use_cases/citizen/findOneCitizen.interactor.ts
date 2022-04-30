import { Citizen } from '../../../entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';

export class FindOneCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public findOneCitizen(id: number): Promise<Citizen> {
    return this.citizenRepository.findOne(id);
  }
}
