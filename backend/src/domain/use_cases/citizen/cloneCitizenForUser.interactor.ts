import { User } from 'src/entities/user.entity';
import { Citizen } from 'src/entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';
import { CloneCitizenInteractor } from './cloneCitizen.interactor';

export class CloneCitizenForUserInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public cloneCitizenForUser(citizen: Citizen, user: User): Promise<Citizen> {
    citizen = new CloneCitizenInteractor().cloneCitizen(citizen);
    citizen.user = user;
    user.citizens.push(citizen);
    return this.citizenRepository.save(citizen);
  }
}
