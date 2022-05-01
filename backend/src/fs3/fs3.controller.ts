import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FindAllFS3Interactor } from 'src/domain/use_cases/fs3/findAllFS3.interactor';
import { FindOneFS3Interactor } from 'src/domain/use_cases/fs3/findOneFS3.interactor';
import { SaveFS3Interactor } from 'src/domain/use_cases/fs3/saveFS3.interactor';
import { FS3 } from 'src/entities/fs3.entity';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';

@Controller('fs3')
export class FS3Controller {
  constructor(
    @Inject('FindAllFS3') private readonly findAllFS3: FindAllFS3Interactor,
    @Inject('FindOneFS3')
    private readonly findOneFS3: FindOneFS3Interactor,
    @Inject('SaveFS3')
    private readonly saveFS3: SaveFS3Interactor,
  ) {}

  @Post()
  @Roles(Role.SuperUser)
  save(@Body() body: FS3): Promise<FS3> {
    return this.saveFS3.saveFS3(body);
  }

  @Get()
  @Roles(Role.SuperUser)
  findAll(): Promise<FS3[]> {
    return this.findAllFS3.findAllFS3();
  }

  @Get(':id')
  findOne(@Param() params): Promise<FS3> {
    return this.findOneFS3.findOneFS3(params.id);
  }
}
