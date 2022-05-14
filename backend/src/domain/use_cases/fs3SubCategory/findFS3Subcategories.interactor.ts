import {Fs3SubCategoryRepository} from "../../borders/fs3SubCategory.repository";
import {Fs3SubCategory} from "../../../entities/fs3SubCategory.entity";

export class FindFS3SubcategoriesInteractor {
    constructor(private readonly fs3SubCategoryRepository: Fs3SubCategoryRepository) {}

    public findAll(id: string): Promise<Fs3SubCategory[]> {
        return this.fs3SubCategoryRepository.findAll(id);
    }

}
