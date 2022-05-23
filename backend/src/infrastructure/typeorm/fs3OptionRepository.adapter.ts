import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {Fs3OptionRepository} from "../../domain/borders/fs3Option.repository";
import {Fs3Option} from "../../entities/fs3Option.entity";

@Injectable()
export class Fs3OptionRepositoryAdapter implements Fs3OptionRepository {
    private readonly FS3TermRepo: Repository<Fs3Option>;

    constructor(private readonly em: EntityManager) {
        this.FS3TermRepo = em.getRepository(Fs3Option);
    }

    findAll(): Promise<Fs3Option[]> {
        return this.FS3TermRepo.find();
    }


}
