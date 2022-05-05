import httpClient from "./http.client";
import {FS3Term} from "../models/fs3Term";

export class FS3TermService{

    getFS3Terms():Promise<FS3Term[]>{
        return httpClient.get("/fs3Term");
    }

}
