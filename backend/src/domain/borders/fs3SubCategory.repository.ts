import {Fs3SubCategory} from "../../entities/fs3SubCategory.entity";


export interface Fs3SubCategoryRepository {
    findAll(): Promise<Fs3SubCategory[]>;

}
