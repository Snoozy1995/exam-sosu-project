import axios from "axios";

export class Fs3OptionsService {

    getFS3Options():Promise<any>{
        return axios.get("/fs3Option");
    }

}
