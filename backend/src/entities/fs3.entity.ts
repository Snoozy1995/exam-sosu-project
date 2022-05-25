import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from 'typeorm';
import {FS3Term} from './fs3Term.entity';
import {Fs3SubCategory} from "./fs3SubCategory.entity";
import {DocumentationPractice} from "./documentationPractice.entity";
import {HelpQuestion} from "./helpQuestion.entity";
import {FS3Example} from "./fs3Example.entity";

@Entity()
export class FS3 {

  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty({ type: () => FS3Term })
  @ManyToOne(() => FS3Term, { nullable: false })
  term: FS3Term;

  @ApiProperty()
  @Column({ nullable: false })
  definition: string;

  // @ApiProperty()
  // @Column("text", { nullable: true })
  // description: string;

  // @ApiProperty()
  // @Column('simple-array', { nullable: true })
  // synonyms: string[];

  // @ApiProperty()
  // @Column('simple-array', { nullable: true })
  // options: string[];

  @ApiProperty()
  @Column()
  active: boolean;

  @ApiProperty()
  @Column()
  enableFunctionalAbility: boolean;

  @ApiProperty()
  @OneToMany(() => Fs3SubCategory, fs3Sub => fs3Sub.fs3, {primary: true})
  fs3Subs: Fs3SubCategory[];

  @ApiProperty()
  @OneToMany(() => HelpQuestion, helpQuestion => helpQuestion.fs3, {primary: true})
  helpQuestions: HelpQuestion[];

  @ApiProperty()
  @OneToMany(() => FS3Example, fs3Example => fs3Example.fs3, {primary: true})
  examples: FS3Example[];

  @ApiProperty()
  @OneToMany(() => DocumentationPractice,practice => practice.fs3, {primary: true})
  @JoinColumn()
  documentationPractices: DocumentationPractice[];
}
