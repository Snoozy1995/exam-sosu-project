import {WorkGroup} from 'src/entities/workGroups.entity';
import {Citizen} from '../../../entities/citizen.entity';
import {CitizenRepository} from '../../borders/citizen.repository';
import {CloneCitizenInteractor} from './cloneCitizen.interactor';

export class CloneCitizenForGroupInteractor {
  constructor(private readonly citizenRepository: CitizenRepository) {}

  public cloneCitizenForGroup(
    citizen: Citizen,
    group: WorkGroup,
  ): Promise<Citizen> {
    if (!citizen) return undefined;
    const citizen2 = new CloneCitizenInteractor().cloneCitizen(citizen);
    citizen2.parent = undefined;
    citizen2.group = group;
    return this.citizenRepository.save(citizen);
  }
}
