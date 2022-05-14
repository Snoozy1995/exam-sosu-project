import {Column, Entity, ManyToOne} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {FS3} from "./fs3.entity";

@Entity()
export class Fs3SubCategory {

    // @ApiProperty()
    // @PrimaryGeneratedColumn()
    // id: number;

    @ApiProperty()
    @Column({primary: true})
    category: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.fs3Subs, {primary: true})
    fs3: FS3;
}
