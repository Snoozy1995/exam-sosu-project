import {Controller, Get, Inject, UseGuards} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';
import {FindFS3SubcategoriesInteractor} from "../domain/use_cases/fs3SubCategory/findFS3Subcategories.interactor";
import {Fs3SubCategory} from "../entities/fs3SubCategory.entity";

@ApiTags('fs3SubCategory')
@Controller('fs3SubCategory')
@UseGuards(AuthenticatedGuard)
export class Fs3SubCategoryController {
    constructor(
        @Inject('FindAllFS3SubCategories')
        private readonly findAllFS3Terms: FindFS3SubcategoriesInteractor,
    ) {}

    @Get()
    findAll(): Promise<Fs3SubCategory[]> {
        return this.findAllFS3Terms.findAll();
    }
}
