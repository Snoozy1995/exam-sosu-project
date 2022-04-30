import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Citizen } from '../entities/citizen.entity';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';
import { CitizensService } from './citizens.service';

@Controller('citizens')
export class CitizensController {
  constructor(private citizensService: CitizensService) {}

  @Post()
  @Roles(Role.Teacher)
  create(@Body() body: Citizen): Citizen {
    return this.citizensService.create(body);
  }

  @Get()
  findAll(): Citizen[] {
    return this.citizensService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Citizen {
    return this.citizensService.findOne(params.id);
  }
}
