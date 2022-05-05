import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {FS3TermRepository} from "../../domain/borders/fs3Term.repository";
import {FS3Term} from "../../entities/fs3Term.entity";

@Injectable()
export class Fs3TermRepositoryAdapter implements FS3TermRepository {
    private readonly FS3TermRepo: Repository<FS3Term>;

    constructor(private readonly em: EntityManager) {
        this.FS3TermRepo = em.getRepository(FS3Term);
    }

    findAll(): Promise<FS3Term[]> {
        return this.FS3TermRepo.find();
    }


}
