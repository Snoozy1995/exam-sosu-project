import axios from "axios";

export class CityService {
  query(query: number | string): Promise<any> {
    if(Number.isInteger(query)){
      return axios.get('https://api.dataforsyningen.dk/postnumre?nr='+query);
    }
    return axios.get('https://api.dataforsyningen.dk/postnumre?q='+query);
  }
}