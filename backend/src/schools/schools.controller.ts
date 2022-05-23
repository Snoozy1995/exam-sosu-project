import {Body, Controller, Get, Inject, Param, Post, UseGuards,} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {FindAllSchoolInteractor} from '../domain/use_cases/school/findAllSchool.interactor';
import {FindOneSchoolInteractor} from '../domain/use_cases/school/findOneSchool.interactor';
import {SaveSchoolInteractor} from '../domain/use_cases/school/saveSchool.interactor';
import {School} from '../entities/school.entity';
import {Role} from '../enums/role.enum';
import {Roles} from '../auth/roles/roles.decorator';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';
import {AutocompleteSchoolInteractor} from 'src/domain/use_cases/school/autocompleteSchool.interactor';

@ApiTags('schools')
@Controller('schools')
@UseGuards(AuthenticatedGuard)
export class SchoolsController {
  constructor(
    @Inject('SaveSchool') private readonly saveSchool: SaveSchoolInteractor,
    @Inject('FindOneSchool')
    private readonly findOneSchool: FindOneSchoolInteractor,
    @Inject('FindAllSchool')
    private readonly findAllSchool: FindAllSchoolInteractor,
    @Inject('AutocompleteSchool')
    private readonly autoCompleteSchool: AutocompleteSchoolInteractor,
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

  @Get('autocomplete/:query')
  @Roles(Role.SuperUser)
  autocomplete(@Param('query') query): Promise<School[]> {
    return this.autoCompleteSchool.autocompleteSchool(query);
  }
}
