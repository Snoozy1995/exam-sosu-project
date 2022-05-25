import axios from "axios";

export class AuthService {

  login(username: string,password: string) {
    return axios.post("/auth",{username:username,password:password});
  }

  createUser(username: string,password: string,role: string,school:string) {
    return axios.post("/auth/create",{username:username,password:password,role:role,schoolName:school});
  }

  getProfile(){
    return axios.get("/auth");
  }

  logout(){
    axios.get('/auth/logout');
  }
}
