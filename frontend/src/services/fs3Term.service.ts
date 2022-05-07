import httpClient from "./http.client";
import {FS3Term} from "../models/fs3Term";

export class FS3TermService{

    getFS3Terms():Promise<any>{
        return httpClient.get("/fs3Term");
    }

}
