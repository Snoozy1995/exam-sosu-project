import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {FS3Repository} from 'src/domain/borders/fs3.repository';
import {FS3} from 'src/entities/fs3.entity';

@Injectable()
export class FS3RepositoryAdapter implements FS3Repository {
    private readonly FS3Repo: Repository<FS3>;

    constructor(private readonly em: EntityManager) {
        this.FS3Repo = em.getRepository(FS3);
    }

    save(FS3: FS3): Promise<FS3> {
        return this.FS3Repo.save(FS3);
    }

    findAll(): Promise<FS3[]> {
        return this.FS3Repo.find();
    }

    findFS3ByTerm(term: string): Promise<FS3[]> {
        return this.FS3Repo.find({
            where: {
                term: {term: term},
            },
            relations: ["fs3Subs", "fs3Subs.subCatDocPractices", "helpQuestions","examples", "documentationPractices", 'term']
        },);

    }
}

