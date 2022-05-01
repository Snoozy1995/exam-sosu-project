import { Citizen } from '../../../entities/citizen.entity';

export class CloneCitizenInteractor {
  public cloneCitizen(ncitizen: Citizen): Citizen {
    const citizen = { ...ncitizen };
    citizen.address = { ...ncitizen.address };
    citizen.id = undefined;
    citizen.group = undefined;
    citizen.children = undefined;
    const whatToReset = [
      'medicines',
      'files',
      'contactPersons',
      'fs3',
      'address',
    ];
    for (const x of whatToReset) {
      if (!citizen[x]) continue;
      else if (Array.isArray(citizen[x])) {
        for (const y of citizen[x]) {
          y.id = undefined;
          if (y.citizen) {
            y.citizen = undefined;
          }
        }
      } else {
        citizen[x].id = undefined;
        if (citizen[x].citizen) {
          citizen[x].citizen = undefined;
        }
      }
    }
    return citizen;
  }
}
