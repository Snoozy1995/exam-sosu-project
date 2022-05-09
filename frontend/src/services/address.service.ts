import axios from "axios";

export class AddressService {
  autoComplete(query: number | string): Promise<any> {
    return new Promise(async (resolve)=>{
      let res=await axios.get('https://api.dataforsyningen.dk/adresser/autocomplete?q='+query,{withCredentials:false});
      let data=[];
      for(let dt of res.data){
        let val=dt.adresse.vejnavn+" "+dt.adresse.husnr;
        if(dt.adresse.etage){
          val+=", "+dt.adresse.etage+".";
        }
        if(dt.adresse.dør){
          val+=" "+dt.adresse.dør;
        }
        data.push({label:dt.tekst,value:val,postCode:dt.adresse.postnr,city:dt.adresse.postnrnavn});
      }
      resolve(data);
    });
  }
}