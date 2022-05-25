import {Citizen} from '../../../entities/citizen.entity';
import {CitizenRepository} from '../../borders/citizen.repository';

export class FindAllCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public findAllCitizen(): Promise<Citizen[]> {
    return this.citizenRepository.findAll();
  }
}
