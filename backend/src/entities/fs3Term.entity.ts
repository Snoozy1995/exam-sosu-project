import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class FS3Term {
  @ApiProperty()
  @PrimaryColumn()
  term: string;
}
