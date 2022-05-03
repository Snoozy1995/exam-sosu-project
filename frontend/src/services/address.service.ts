import axios from "axios";

export class AddressService {
  autoComplete(query: number | string): Promise<any> {
    return new Promise(async (resolve)=>{
      let res=await axios.get('https://api.dataforsyningen.dk/autocomplete?q='+query);
      let data=[];
      for(let dt of res.data){
        data.push({label:dt.tekst});
      }
      resolve(data);
    });
  }
}