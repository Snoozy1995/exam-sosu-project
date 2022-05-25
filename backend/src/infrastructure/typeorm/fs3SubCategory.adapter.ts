import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {Fs3SubCategoryRepository} from "../../domain/borders/fs3SubCategory.repository";
import {Fs3SubCategory} from "../../entities/fs3SubCategory.entity";

@Injectable()
export class Fs3SubCategoryAdapter implements Fs3SubCategoryRepository {
    private readonly fs3SubCategoryRepository: Repository<Fs3SubCategory>;

    constructor(private readonly em: EntityManager) {
        this.fs3SubCategoryRepository = em.getRepository(Fs3SubCategory);
    }

    findAll(id: string): Promise<Fs3SubCategory[]> {
        return this.fs3SubCategoryRepository.find({
            where: {
                fs3Id: { id: parseInt(id) }
            }
        });
    }

}
