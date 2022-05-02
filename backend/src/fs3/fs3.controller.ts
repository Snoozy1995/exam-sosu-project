import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FindAllFS3Interactor } from 'src/domain/use_cases/fs3/findAllFS3.interactor';
import { FindFS3ByTermInteractor } from 'src/domain/use_cases/fs3/findFS3ByTerm.interactor';
import { SaveFS3Interactor } from 'src/domain/use_cases/fs3/saveFS3.interactor';
import { FS3 } from 'src/entities/fs3.entity';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';

@ApiTags('fs3')
@Controller('fs3')
export class FS3Controller {
  constructor(
    @Inject('FindAllFS3') private readonly findAllFS3: FindAllFS3Interactor,
    @Inject('FindFS3ByTerm')
    private readonly findFS3ByTerm: FindFS3ByTermInteractor,
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

  @Get(':term')
  @ApiParam({
    name: 'term',
    required: true,
    description: 'FS3 term to search by',
    type: 'string',
  })
  findOne(@Param('term') params): Promise<FS3[]> {
    return this.findFS3ByTerm.findFS3ByTerm(params);
  }
}
