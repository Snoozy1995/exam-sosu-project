import {FS3Term} from "../../entities/fs3Term.entity";
import {Fs3Option} from "../../entities/fs3Option.entity";


export interface Fs3OptionRepository {
    findAll(): Promise<Fs3Option[]>;

}
