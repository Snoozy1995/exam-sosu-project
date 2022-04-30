import { Citizen } from '../../../entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';

export class SearchCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public searchCitizens(query: string): Promise<Citizen[]> {
    return this.citizenRepository.search(query);
  }
}
