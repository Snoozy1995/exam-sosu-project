import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Fs3SubCategoryController} from "./fs3SubCategory.controller";
import {FindFS3SubcategoriesInteractor} from "../domain/use_cases/fs3SubCategory/findFS3Subcategories.interactor";
import {Fs3SubCategoryRepository} from "../domain/borders/fs3SubCategory.repository";
import {Fs3SubCategory} from "../entities/fs3SubCategory.entity";
import {Fs3SubCategoryAdapter} from "../infrastructure/typeorm/fs3SubCategory.adapter";

const repo = 'FS3SubCategoryRepository';
const inject = {inject: [repo]};

@Module({
    imports: [TypeOrmModule.forFeature([Fs3SubCategory])],
    providers: [
        {
            provide: repo,
            useClass: Fs3SubCategoryAdapter,
        },
        {
            ...inject,
            provide: 'FindAllFS3SubCategories',
            useFactory: (fs3SubCategoryRepository: Fs3SubCategoryRepository) => new FindFS3SubcategoriesInteractor(fs3SubCategoryRepository),
        },
    ],
    controllers: [Fs3SubCategoryController],
})
export class Fs3SubCategoryModule {
}
