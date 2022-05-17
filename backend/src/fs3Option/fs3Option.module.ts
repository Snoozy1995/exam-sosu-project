import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FS3Term} from '../entities/fs3Term.entity';
import {Fs3OptionController} from "./fs3Option.controller";
import {Fs3OptionRepository} from "../domain/borders/fs3Option.repository";

import {Fs3OptionRepositoryAdapter} from "../infrastructure/typeorm/fs3OptionRepository.adapter";
import {FindAllFS3OptionsInteractor} from "../domain/use_cases/fs3Option/findAllFS3Options.interactor";

const repo = 'FS3TermRepository';
const inject = {inject: [repo]};

@Module({
    imports: [TypeOrmModule.forFeature([FS3Term])],
    providers: [
        {
            provide: repo,
            useClass: Fs3OptionRepositoryAdapter,
        },
        {
            ...inject,
            provide: 'FindAllFS3Terms',
            useFactory: (fs3OptionRepository: Fs3OptionRepository) => new FindAllFS3OptionsInteractor(fs3OptionRepository),
        },
    ],
    controllers: [Fs3OptionController],
})
export class Fs3OptionModule {
}
