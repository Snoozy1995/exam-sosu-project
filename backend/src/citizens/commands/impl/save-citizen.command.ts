import { Citizen } from 'src/entities/citizen.entity';

export class SaveCitizenCommand {
  constructor(public readonly citizen: Citizen) {}
}
