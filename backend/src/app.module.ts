import {Module} from '@nestjs/common';
import {APP_GUARD} from '@nestjs/core';
import {RolesGuard} from './auth/roles/roles.guard';
import {CitizensModule} from './citizens/citizens.module';
import {SchoolsModule} from './schools/schools.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UploadModule} from './upload/upload.module';
import {FS3Module} from './fs3/fs3.module';
import {AuthModule} from './auth/auth.module';
import {Fs3TermModule} from './fs3Term/fs3Term.module';
import {Fs3SubCategoryModule} from "./fs3SubCategory/fs3SubCategory.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        CitizensModule,
        SchoolsModule,
        UploadModule,
        FS3Module,
        AuthModule,
        Fs3TermModule,
        Fs3SubCategoryModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule {
}
