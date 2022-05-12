import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FS3Term} from '../entities/fs3Term.entity';
import {FS3TermController} from "./fs3Term.controller";
import {FS3TermRepository} from "../domain/borders/fs3Term.repository";
import {FindAllFS3TermsInteractor} from "../domain/use_cases/fs3Term/findAllFS3Terms.interactor";
import {Fs3TermRepositoryAdapter} from "../infrastructure/typeorm/fs3TermRepository.adapter";

const repo = 'FS3TermRepository';
const inject = {inject: [repo]};

@Module({
    imports: [TypeOrmModule.forFeature([FS3Term])],
    providers: [
        {
            provide: repo,
            useClass: Fs3TermRepositoryAdapter,
        },
        {
            ...inject,
            provide: 'FindAllFS3Terms',
            useFactory: (FS3TermRepo: FS3TermRepository) => new FindAllFS3TermsInteractor(FS3TermRepo),
        },
    ],
    controllers: [FS3TermController],
})
export class Fs3TermModule {
}
