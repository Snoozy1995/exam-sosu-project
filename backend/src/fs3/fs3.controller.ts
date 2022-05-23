import {Body, Controller, Get, Inject, Param, Post, UseGuards,} from '@nestjs/common';
import {ApiParam, ApiTags} from '@nestjs/swagger';
import {FindAllFS3Interactor} from '../domain/use_cases/fs3/findAllFS3.interactor';
import {FindFS3ByTermInteractor} from '../domain/use_cases/fs3/findFS3ByTerm.interactor';
import {SaveFS3Interactor} from '../domain/use_cases/fs3/saveFS3.interactor';
import {FS3} from '../entities/fs3.entity';
import {Role} from '../enums/role.enum';
import {Roles} from '../auth/roles/roles.decorator';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';

@ApiTags('fs3')
@Controller('fs3')
@UseGuards(AuthenticatedGuard)
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
