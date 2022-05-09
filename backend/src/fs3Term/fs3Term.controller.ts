import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { FS3Term } from '../entities/fs3Term.entity';
import { FindAllFS3TermsInteractor } from '../domain/use_cases/fs3Term/findAllFS3Terms.interactor';

@ApiTags('fs3Term')
@Controller('fs3Term')
@UseGuards(AuthenticatedGuard)
export class FS3TermController {
  constructor(
    @Inject('FindAllFS3Terms')
    private readonly findAllFS3Terms: FindAllFS3TermsInteractor,
  ) {}

  @Get()
  findAll(): Promise<FS3Term[]> {
    return this.findAllFS3Terms.findAll();
  }
}
