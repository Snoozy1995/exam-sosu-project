import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SaveCitizenInteractor } from 'src/domain/use_cases/citizen/saveCitizen.interactor';
import { SaveCitizenCommand } from '../impl/save-citizen.command';

@CommandHandler(SaveCitizenCommand)
export class SaveCitizenHandler implements ICommandHandler<SaveCitizenCommand> {
  constructor(
    @Inject('SaveCitizen')
    private readonly saveCitizen: SaveCitizenInteractor,
  ) {}

  async execute(command: SaveCitizenCommand) {
    return this.saveCitizen.saveCitizen(command.citizen);
  }
}
