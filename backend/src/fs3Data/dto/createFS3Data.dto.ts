import {ApiProperty} from '@nestjs/swagger';
import {Fs3DataGeneral} from "../../entities/fs3DataGeneral.entity";
import {Fs3DataHealth} from "../../entities/fs3DataHealth.entity";
import {Fs3DataFunctional} from "../../entities/fs3DataFunctional.entity";


export class CreateFS3DataDto {

    @ApiProperty({ type: () => Fs3DataGeneral, required: false })
    generalData: Fs3DataGeneral;

    @ApiProperty({ type: () => Fs3DataHealth, required: false })
    healthData: Fs3DataHealth;

    @ApiProperty({ type: () => Fs3DataFunctional, required: false })
    functionalData: Fs3DataFunctional;


}
