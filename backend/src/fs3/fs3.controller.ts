import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FindAllFS3Interactor } from 'src/domain/use_cases/fs3/findAllFS3.interactor';
import { FindFS3ByTypeInteractor } from 'src/domain/use_cases/fs3/findFS3ByType.interactor';
import { FindOneFS3Interactor } from 'src/domain/use_cases/fs3/findOneFS3.interactor';
import { GetFS3TypesInteractor } from 'src/domain/use_cases/fs3/getFS3Types.interactor';
import { SaveFS3Interactor } from 'src/domain/use_cases/fs3/saveFS3.interactor';
import { FS3Data } from 'src/entities/fs3Data.entity';
import { FS3Type } from 'src/entities/fs3Type.entity';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';

@Controller('fs3')
export class FS3Controller {
  constructor(
    @Inject('FindAllFS3') private readonly findAllFS3: FindAllFS3Interactor,
    @Inject('FindFS3ByType')
    private readonly findFS3ByType: FindFS3ByTypeInteractor,
    @Inject('FindOneFS3')
    private readonly findOneFS3: FindOneFS3Interactor,
    @Inject('GetFS3Types') private readonly getFS3Types: GetFS3TypesInteractor,
    @Inject('SaveFS3')
    private readonly saveFS3: SaveFS3Interactor,
  ) {}

  @Post()
  @Roles(Role.SuperUser)
  save(@Body() body: FS3Data): Promise<FS3Data> {
    return this.saveFS3.saveFS3(body);
  }

  @Get()
  @Roles(Role.SuperUser)
  findAll(): Promise<FS3Data[]> {
    return this.findAllFS3.findAllFS3();
  }

  @Get(':id')
  findOne(@Param() params): Promise<FS3Data> {
    return this.findOneFS3.findOneFS3(params.id);
  }

  @Get('types')
  getTypes(): Promise<FS3Type[]> {
    return this.getFS3Types.getFS3Types();
  }

  @Get('type/:id')
  findByType(@Body() body: FS3Type): Promise<FS3Data[]> {
    return this.findFS3ByType.findFS3ByType(body);
  }
}
