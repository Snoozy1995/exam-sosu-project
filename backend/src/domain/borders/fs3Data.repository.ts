import {FS3Data} from "../../entities/fs3Data.entity";
import {CreateFS3DataDto} from "../../fs3Data/dto/createFS3Data.dto";


export interface Fs3DataRepository {
    findAll(): Promise<FS3Data[]>;
    createFS3Data(fs3Data: FS3Data): Promise<FS3Data>;

}
