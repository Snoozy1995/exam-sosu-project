import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Citizen } from '../entities/citizen.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../auth/roles/roles.decorator';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { CitizenUpdatedEvent } from './events/citizen-updated.event';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCitizenQuery, GetCitizensQuery } from './queries/impl';
import { DeleteCitizenCommand } from './commands/impl/delete-citizen.command';
import { SaveCitizenCommand } from './commands/impl/save-citizen.command';
import { NewVersionCitizenCommand } from './commands/impl/new-version-citizen.command';

@ApiTags('citizens')
@Controller('citizens')
@UseGuards(AuthenticatedGuard)
export class CitizensController {
  constructor(
    private eventEmitter: EventEmitter2,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  //@Roles(Role.Teacher)
  async save(
    @Body() body: Citizen,
    @Session() session: Record<string, any>,
  ): Promise<Citizen> {
    body.user = session.loggedIn;
    body.schoolName = body.user.schoolName;
    const result = await this.commandBus.execute(new SaveCitizenCommand(body));
    return new Promise((res) => {
      const event = new CitizenUpdatedEvent();
      event.citizen = result;
      this.eventEmitter.emit('citizen.updated', event);
      res(result);
    });
  }

  @Get()
  findAll(): Promise<Citizen[]> {
    return this.queryBus.execute(new GetCitizensQuery());
  }

  @Get('/:identifier')
  @ApiParam({
    name: 'identifier',
    required: true,
    description:
      'either an integer for the citizen id or a string for the citizen name',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  findOne(@Param('identifier') params: string | number): Promise<Citizen> {
    return this.queryBus.execute(new GetCitizenQuery(params));
  }

  @Delete(':id')
  @Roles(Role.Teacher)
  delete(@Param() params): Promise<boolean> {
    return this.commandBus.execute(new DeleteCitizenCommand(params.id));
  }

  @Get('version/:id')
  @Roles(Role.Teacher)
  version(@Param() params) {
    return this.commandBus.execute(new NewVersionCitizenCommand(params.id));
  }
}
