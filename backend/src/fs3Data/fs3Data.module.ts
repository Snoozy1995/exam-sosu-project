import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Fs3DataRepositoyAdapter} from "../infrastructure/typeorm/fs3DataRepositoy.adapter";
import {FS3Data} from "../entities/fs3Data.entity";
import {Fs3DataRepository} from "../domain/borders/fs3Data.repository";
import {FindAllFS3DataInteractor} from "../domain/use_cases/fs3Data/findallFS3Data.interactor";
import {FS3DataController} from "./fs3Data.controller";
import {CreateFS3DataInteractor} from "../domain/use_cases/fs3Data/CreateFS3Data.interactor";

const repo = 'FS3DataRepository';
const inject = {inject: [repo]};

@Module({
    imports: [TypeOrmModule.forFeature([FS3Data])],
    providers: [
        {
            provide: repo,
            useClass: Fs3DataRepositoyAdapter,
        },
        {
            ...inject,
            provide: 'findAllFS3Data',
            useFactory: (fs3DataRepository: Fs3DataRepository) => new FindAllFS3DataInteractor(fs3DataRepository),

        },
        {
            ...inject,
            provide: 'createFS3Data',
            useFactory: (fs3DataRepository: Fs3DataRepository) => new CreateFS3DataInteractor(fs3DataRepository),

        },

    ],
    controllers: [FS3DataController],
})
export class Fs3DAtaModule {
}
