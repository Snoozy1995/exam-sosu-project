import { Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCitizenInteractor } from 'src/domain/use_cases/citizen/deleteCitizen.interactor';
import { DeleteCitizenCommand } from '../impl/delete-citizen.command';

@CommandHandler(DeleteCitizenCommand)
export class DeleteCitizenHandler
  implements ICommandHandler<DeleteCitizenCommand>
{
  constructor(
    //private readonly repository: HeroRepository,
    @Inject('DeleteCitizen')
    private readonly deleteCitizen: DeleteCitizenInteractor,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteCitizenCommand) {
    //console.log(clc.yellowBright('Async DropAncientItemCommand...'));
    return this.deleteCitizen.deleteCitizen(command.id);
  }
}
