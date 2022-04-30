import { WorkGroup } from 'src/entities/workGroups.entity';
import { Citizen } from '../../../entities/citizen.entity';
import { CitizenRepository } from '../../borders/citizen.repository';
import { CloneCitizenInteractor } from './cloneCitizen.interactor';

export class CloneCitizenForGroupInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public cloneCitizenForGroup(
    citizen: Citizen,
    group: WorkGroup,
  ): Promise<Citizen> {
    citizen = new CloneCitizenInteractor().cloneCitizen(citizen);
    citizen.group = group;
    group.citizens.push(citizen);
    return this.citizenRepository.save(citizen);
  }
}
