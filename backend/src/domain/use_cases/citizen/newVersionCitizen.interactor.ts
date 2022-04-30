import { Citizen } from '../../../entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';

export class NewVersionCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public newVersionCitizen(citizen: Citizen): Promise<Citizen> {
    return this.citizenRepository.newVersion(citizen);
  }
}
