import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles/roles.guard';
import { CitizensModule } from './citizens/citizens.module';
import { SchoolsModule } from './schools/schools.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';
import { FS3Module } from './fs3/fs3.module';
import { AuthModule } from './auth/auth.module';

import { Fs3OptionModule } from './fs3Option/fs3Option.module';
import { Fs3DAtaModule } from './fs3Data/fs3Data.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EventEmitterModule.forRoot(),
    CitizensModule,
    SchoolsModule,
    UploadModule,
    FS3Module,
    AuthModule,
    Fs3OptionModule,
    Fs3DAtaModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
