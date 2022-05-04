import httpClient from "./http.client";

export class AuthService {

  login(username: string,password: string) {
    return httpClient.post("/auth",{username:username,password:password});
  }

  createUser(username: string,password: string,role: string) {
    return httpClient.post("/auth/create",{username:username,password:password,role:role});
  }

  getProfile(){
    return httpClient.get("/auth");
  }

  logout(){
    httpClient.get('/auth/logout');
  }
}