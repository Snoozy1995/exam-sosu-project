import axios from "axios";
import {FS3Term} from "../models/fs3Term";

export class FS3TermService{

    getFS3Terms():Promise<any>{
        return axios.get("/fs3Term");
    }

}
