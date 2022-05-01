import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FS3 } from './fs3.entity';
@Entity()
export class FS3Child {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  term: string;

  @ApiProperty()
  @Column()
  definition: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  synonyms: string;

  //@ApiProperty({ type: () => FS3, required: false })
  @ManyToOne(() => FS3, (fs3) => fs3.children)
  parent: FS3;
}
