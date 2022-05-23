import {Citizen} from '../../../entities/citizen.entity';
import {CitizenRepository} from '../../borders/citizen.repository';

export class SaveCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public saveCitizen(citizen: Citizen): Promise<Citizen> {
    return this.citizenRepository.save(citizen);
  }
}
