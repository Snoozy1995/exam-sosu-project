import {Controller, Get, Inject, UseGuards} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';
import {FindAllFS3OptionsInteractor} from "../domain/use_cases/fs3Option/findAllFS3Options.interactor";
import {Fs3Option} from "../entities/fs3Option.entity";

@ApiTags('fs3Option')
@Controller('fs3Option')
@UseGuards(AuthenticatedGuard)
export class Fs3OptionController {
  constructor(
    @Inject('FindAllFS3Terms')
    private readonly findAllFS3Terms: FindAllFS3OptionsInteractor,
  ) {}

  @Get()
  findAll(): Promise<Fs3Option[]> {
    return this.findAllFS3Terms.findAll();
  }
}
