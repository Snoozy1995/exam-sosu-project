import {FS3Term} from "../../entities/fs3Term.entity";


export interface FS3TermRepository {
    findAll(): Promise<FS3Term[]>;

}
