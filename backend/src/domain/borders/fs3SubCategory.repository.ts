import {Fs3SubCategory} from "../../entities/fs3SubCategory.entity";


export interface Fs3SubCategoryRepository {
    findAll(fs3: string): Promise<Fs3SubCategory[]>;

}
