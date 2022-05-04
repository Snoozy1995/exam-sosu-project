import httpClient from "./http.client";

export class SchoolService{
  autocomplete(query: string): Promise<any> {
    return new Promise(async (resolve)=>{
      let res=await httpClient.get("/schools/autocomplete?query="+query);
      let data=[];
      for(let dt of res.data){
        data.push({label:dt.name,value:dt});
      }
      resolve(data);
    });
  }
}