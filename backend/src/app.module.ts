import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
import { CitizensModule } from './citizens/citizens.module';
import { SchoolsModule } from './schools/schools.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';
import { FS3Module } from './fs3/fs3.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CitizensModule,
    SchoolsModule,
    UploadModule,
    FS3Module,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
