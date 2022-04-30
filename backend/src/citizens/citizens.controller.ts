import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FindAllCitizenInteractor } from '../domain/use_cases/findAllCitizen.interactor';
import { FindOneCitizenInteractor } from '../domain/use_cases/findOneCitizen.interactor';
import { SaveCitizenInteractor } from '../domain/use_cases/saveCitizen.interactor';
import { Citizen } from '../entities/citizen.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';
//import { CitizensService } from './citizens.service';

@Controller('citizens')
export class CitizensController {
  //constructor(private citizensService: CitizensService) {}
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
    //return this.citizensService.save(body);
  }

  @Get()
  findAll(): Promise<Citizen[]> {
    return this.findAllCitizen.findAllCitizen();
    //return this.citizensService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Citizen> {
    return this.findOneCitizen.findOneCitizen(params.id);
    //return this.citizensService.findOne(params.id);
  }
}
