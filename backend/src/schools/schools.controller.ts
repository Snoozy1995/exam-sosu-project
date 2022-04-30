import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FindAllSchoolInteractor } from '../domain/use_cases/school/findAllSchool.interactor';
import { FindOneSchoolInteractor } from '../domain/use_cases/school/findOneSchool.interactor';
import { SaveSchoolInteractor } from '../domain/use_cases/school/saveSchool.interactor';
import { School } from '../entities/school.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';

@Controller('schools')
export class SchoolsController {
  constructor(
    @Inject('SaveSchool') private readonly saveSchool: SaveSchoolInteractor,
    @Inject('FindOneSchool')
    private readonly findOneSchool: FindOneSchoolInteractor,
    @Inject('FindAllSchool')
    private readonly findAllSchool: FindAllSchoolInteractor,
  ) {}

  @Post()
  @Roles(Role.SuperUser)
  save(@Body() body: School): Promise<School> {
    return this.saveSchool.saveSchool(body);
  }

  @Get()
  @Roles(Role.SuperUser)
  findAll(): Promise<School[]> {
    return this.findAllSchool.findAllSchool();
  }

  @Get(':id')
  @Roles(Role.Teacher, Role.SuperUser)
  findOne(@Param() params): Promise<School> {
    return this.findOneSchool.findOneSchool(params.id);
  }
}
