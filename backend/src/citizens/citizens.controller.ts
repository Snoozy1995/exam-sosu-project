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
import { NewVersionCitizenInteractor } from 'src/domain/use_cases/citizen/newVersionCitizen.interactor';
import { DeleteCitizenInteractor } from '../domain/use_cases/citizen/deleteCitizen.interactor';
import { FindAllCitizenInteractor } from '../domain/use_cases/citizen/findAllCitizen.interactor';
import { FindOneCitizenInteractor } from '../domain/use_cases/citizen/findOneCitizen.interactor';
import { SaveCitizenInteractor } from '../domain/use_cases/citizen/saveCitizen.interactor';
import { Citizen } from '../entities/citizen.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../auth/roles/roles.decorator';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { CitizenUpdatedEvent } from './events/citizen-updated.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@ApiTags('citizens')
@Controller('citizens')
@UseGuards(AuthenticatedGuard)
export class CitizensController {
  constructor(
    @Inject('SaveCitizen') private readonly saveCitizen: SaveCitizenInteractor,
    @Inject('FindOneCitizen')
    private readonly findOneCitizen: FindOneCitizenInteractor,
    @Inject('FindAllCitizen')
    private readonly findAllCitizen: FindAllCitizenInteractor,
    @Inject('DeleteCitizen')
    private readonly deleteCitizen: DeleteCitizenInteractor,
    @Inject('NewVersionCitizen')
    private readonly newVersionCitizen: NewVersionCitizenInteractor,
    private eventEmitter: EventEmitter2,
  ) {}

  @Post()
  //@Roles(Role.Teacher)
  async save(
    @Body() body: Citizen,
    @Session() session: Record<string, any>,
  ): Promise<Citizen> {
    body.user = session.loggedIn;
    body.schoolName = body.user.schoolName;
    const result = await this.saveCitizen.saveCitizen(body);
    return new Promise((res, rej) => {
      const event = new CitizenUpdatedEvent();
      event.citizen = result;
      this.eventEmitter.emit('citizen.updated', event);
      res(result);
    });
  }

  @Get()
  findAll(): Promise<Citizen[]> {
    return this.findAllCitizen.findAllCitizen();
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
    return this.findOneCitizen.findOneCitizen(params);
  }

  @Delete(':id')
  @Roles(Role.Teacher)
  delete(@Param() params): Promise<boolean> {
    return this.deleteCitizen.deleteCitizen(params.id);
  }

  @Get('version/:id')
  @Roles(Role.Teacher)
  version(@Param() params) {
    return this.newVersionCitizen.newVersionCitizen(params.id);
  }
}
