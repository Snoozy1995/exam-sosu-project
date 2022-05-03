import axios from "axios";

export class CityService {
  query(query: string): Promise<any> {
    if(/^-?\d+$/.test(query)){
      return axios.get('https://api.dataforsyningen.dk/postnumre?nr='+query);
    }
    return axios.get('https://api.dataforsyningen.dk/postnumre?navn='+query);
  }

  autoComplete(query: string): Promise<any> {
    return new Promise(async (resolve)=>{
      let res=await axios.get('https://api.dataforsyningen.dk/postnumre/autocomplete?q='+query);
      let data=[];
      for(let dt of res.data){
        data.push({label:dt.tekst,value:dt.postnummer.navn});
      }
      resolve(data);
    });
  }
}