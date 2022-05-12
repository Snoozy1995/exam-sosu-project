import axios from "axios";

export class Fs3SubCategoryService{

    getFS3SubCategories():Promise<any>{
        return axios.get("/fs3SubCategory");
    }

}
