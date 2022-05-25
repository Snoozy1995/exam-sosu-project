import {Citizen} from '../../../entities/citizen.entity';
import {CitizenRepository} from '../../borders/citizen.repository';
import {CloneCitizenInteractor} from './cloneCitizen.interactor';

export class NewVersionCitizenInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public async newVersionCitizen(id: number): Promise<Citizen> {
    const citizen = await this.citizenRepository.findOne(id);
    if (!citizen) return undefined;
    const citizen2 = new CloneCitizenInteractor().cloneCitizen(citizen);
    citizen2.parent = citizen;
    return this.citizenRepository.save(citizen2);
  }
}
