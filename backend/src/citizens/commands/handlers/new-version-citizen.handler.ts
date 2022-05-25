import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewVersionCitizenInteractor } from 'src/domain/use_cases/citizen/newVersionCitizen.interactor';
import { NewVersionCitizenCommand } from '../impl/new-version-citizen.command';

@CommandHandler(NewVersionCitizenCommand)
export class NewVersionCitizenHandler
  implements ICommandHandler<NewVersionCitizenCommand>
{
  constructor(
    @Inject('NewVersionCitizen')
    private readonly newVersionCitizen: NewVersionCitizenInteractor,
  ) {}

  async execute(command: NewVersionCitizenCommand) {
    return this.newVersionCitizen.newVersionCitizen(command.id);
  }
}
