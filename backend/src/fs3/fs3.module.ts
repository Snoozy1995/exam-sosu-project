import { Module } from '@nestjs/common';
import { FS3Controller } from './fs3.controller';

@Module({
  controllers: [FS3Controller],
  providers: [],
})
export class FS3Module {}
