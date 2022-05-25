import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class FS3Term {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  term: string;
}
