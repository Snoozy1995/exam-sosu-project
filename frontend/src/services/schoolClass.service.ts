import axios from "axios";

export class SchoolClassService{
  save(school:any){
    return axios.post("/schools",school);
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
}
