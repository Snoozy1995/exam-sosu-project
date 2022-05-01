import { User } from 'src/entities/user.entity';
import { Citizen } from 'src/entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';
import { CloneCitizenInteractor } from './cloneCitizen.interactor';

export class CloneCitizenForUserInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public cloneCitizenForUser(citizen: Citizen, user: User): Promise<Citizen> {
    if (!citizen) return undefined;
    const citizen2 = new CloneCitizenInteractor().cloneCitizen(citizen);
    citizen2.parent = undefined;
    citizen2.user = user;
    return this.citizenRepository.save(citizen);
  }
}
