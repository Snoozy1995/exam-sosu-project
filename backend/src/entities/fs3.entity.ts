import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FS3Term } from './fs3Term.entity';
@Entity()
export class FS3 {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => FS3Term })
  @ManyToOne(() => FS3Term, { nullable: false })
  term: FS3Term;

  @ApiProperty()
  @Column()
  definition: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column('simple-array', { nullable: true })
  synonyms: string[];

  @ApiProperty()
  @Column('simple-array', { nullable: true })
  options: string[];

  @ApiProperty()
  @Column()
  active: boolean;
}
