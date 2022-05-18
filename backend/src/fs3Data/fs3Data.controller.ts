import {Body, Controller, Get, Inject, Post, UseGuards} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';
import {FS3Data} from "../entities/fs3Data.entity";
import {FindAllFS3DataInteractor} from "../domain/use_cases/fs3Data/findallFS3Data.interactor";
import {CreateFS3DataDto} from "./dto/createFS3Data.dto";
import {CreateFS3DataInteractor} from "../domain/use_cases/fs3Data/CreateFS3Data.interactor";

@ApiTags('fs3Data')
@Controller('fs3Data')
@UseGuards(AuthenticatedGuard)
export class FS3DataController {
    constructor(
        @Inject('findAllFS3Data')
        private readonly findAllFS3Data: FindAllFS3DataInteractor,
        @Inject('createFS3Data') private readonly create: CreateFS3DataInteractor,
    ) {}

    @Get()
    findAll(): Promise<FS3Data[]> {
        return this.findAllFS3Data.findAll();
    }

    @Post('/create')
    async createFS3Data(@Body() body: CreateFS3DataDto): Promise<FS3Data> {
        return this.create.createFS3Data(body);
    }
}
