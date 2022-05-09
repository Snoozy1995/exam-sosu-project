import axios from "axios";

export class Fs3Service{
    save(school:any){
        return axios.post("/fs3",school);
    }

    autocomplete(query: string): Promise<any> {
        return new Promise(async (resolve)=>{
            let res=await axios.get("/schools/autocomplete/"+query);
            let data=[];
            for(let dt of res.data){
                data.push({label:dt.name,value:dt});
            }
            resolve(data);
        });
    }

    getFS3sByTerm(query: string):Promise<any>{
        return axios.get("/fs3/"+query);
    }
}
