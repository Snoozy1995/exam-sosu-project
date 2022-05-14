import {Controller, Get, Inject, Param, UseGuards} from '@nestjs/common';
import {ApiParam, ApiTags} from '@nestjs/swagger';
import {AuthenticatedGuard} from 'src/auth/guards/authenticated.guard';
import {FindFS3SubcategoriesInteractor} from "../domain/use_cases/fs3SubCategory/findFS3Subcategories.interactor";
import {Fs3SubCategory} from "../entities/fs3SubCategory.entity";

@ApiTags('fs3SubCategory')
@Controller('fs3SubCategory')
@UseGuards(AuthenticatedGuard)
export class Fs3SubCategoryController {
    constructor(
        @Inject('FindAllFS3SubCategories')
        private readonly findAllSubCategoriesToFS3: FindFS3SubcategoriesInteractor,
    ) {}

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true,
        description: 'FS3 subcategory to search by',
        type: 'string',
    })
    @Get()
    findAllSubcategoriesToFS3(@Param('id') id): Promise<Fs3SubCategory[]> {
        return this.findAllSubCategoriesToFS3.findAll(id);
    }


}
