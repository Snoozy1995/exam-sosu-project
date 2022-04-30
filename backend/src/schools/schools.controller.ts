import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { School } from '../entities/school.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private schoolsService: SchoolsService) {}

  @Post()
  @Roles(Role.SuperUser)
  save(@Body() body: School): School {
    return this.schoolsService.save(body);
  }

  @Get()
  @Roles(Role.SuperUser)
  findAll(): School[] {
    return this.schoolsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Teacher, Role.SuperUser)
  findOne(@Param() params): School {
    return this.schoolsService.findOne(params.id);
  }
}
