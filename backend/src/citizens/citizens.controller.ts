import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FindAllCitizenInteractor } from '../domain/use_cases/findAllCitizen.interactor';
import { FindOneCitizenInteractor } from '../domain/use_cases/findOneCitizen.interactor';
import { SaveCitizenInteractor } from '../domain/use_cases/saveCitizen.interactor';
import { Citizen } from '../entities/citizen.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';

@Controller('citizens')
export class CitizensController {
  constructor(
    @Inject('SaveCitizen') private readonly saveCitizen: SaveCitizenInteractor,
    @Inject('FindOneCitizen')
    private readonly findOneCitizen: FindOneCitizenInteractor,
    @Inject('FindAllCitizen')
    private readonly findAllCitizen: FindAllCitizenInteractor,
  ) {}

  @Post()
  @Roles(Role.Teacher)
  save(@Body() body: Citizen): Promise<Citizen> {
    return this.saveCitizen.saveCitizen(body);
  }

  @Get()
  findAll(): Promise<Citizen[]> {
    return this.findAllCitizen.findAllCitizen();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Citizen> {
    return this.findOneCitizen.findOneCitizen(params.id);
  }
}
