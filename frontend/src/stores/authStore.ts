import { defineStore } from "pinia";
import Router from "../router";
import { AuthService } from "../services/auth.service";
const authService: AuthService = new AuthService();
export const AuthStore = defineStore({
  id: "authStore",
  state: ()=>({
    user:{
      username: '',
      role:'',
      created_at:'',
      updated_at:'',
      files: [],
      school: {},
      classes: [],
      citizens: [],
    },
  }),
  actions:{
    async createUser(username:string,password:string,role:string,school:any){
      school=school.value.name;
      let res=await authService.createUser(username,password,role,school);
      return new Promise((resolve)=>{
        //@todo
      })
    },
    async login(username:string,password:string) {
      let res=await authService.login(username,password);
      this.user=res.data;
      return this.user;
    },
    async getProfile() {
      let res=await authService.getProfile();
      this.user=res.data;
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
        school: {},
        classes: [],
        citizens: [],
      };
      Router.push('/login');
    }
  }
});
