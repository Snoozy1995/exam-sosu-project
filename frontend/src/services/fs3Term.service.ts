import axios from "axios";

export class FS3TermService{

    getFS3Terms():Promise<any>{
        return axios.get("/fs3Term");
    }

}
