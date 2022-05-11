import { defineStore } from "pinia";
import { School } from "../models/school";
import { User } from "../models/user";
import Router from "../router";
import { AuthService } from "../services/auth.service";
const authService: AuthService = new AuthService();
export const AuthStore = defineStore({
  id: "authStore",
  state: ()=>({
    user:{} as User,
    loggedIn:false,
  }),
  actions:{
    createUser(username:string,password:string,role:string,school:any){
      school=school.value.name;
      return authService.createUser(username,password,role,school);
    },
    login(username:string,password:string):Promise<User> {
      return new Promise(async (resolve,reject)=>{
        let res;
        try{
          res=await authService.login(username,password);
        }
        catch(err:any){
          return alert(err.response.data.error);
        }
        this.user=res.data;
        this.loggedIn=true;
        resolve(this.user);
      });
    },
    async getProfile() {
      let res=await authService.getProfile();
      if(!res.data) return this.user;
      this.loggedIn=true;
      this.user=res.data;
      if(this.user.citizens&&this.user.citizens.length){
        //Filter children
        this.user.citizens.sort((a,b)=>{
          return (new Date(b.updated_at).getTime()-new Date(a.updated_at).getTime());
        });
      }
      return this.user;
    },
    logout(){
      authService.logout();
      this.user={
        username: '',
        role:'',
        created_at:'',
        updated_at:'',
        files: [],
        school: {} as School,
        //classes: [],
        citizens: [],
      };
      Router.push('/login');
    }
  }
});
