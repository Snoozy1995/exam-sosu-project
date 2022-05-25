import {CitizenRepository} from '../../borders/citizen.repository';

export class DeleteCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public deleteCitizen(id: number): Promise<boolean> {
    return this.citizenRepository.delete(id);
  }
}
