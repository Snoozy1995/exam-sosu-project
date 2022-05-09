import axios from "axios";
import { defineStore } from "pinia";
import { io } from 'socket.io-client';
export const SocketStore = defineStore({
  id: "socketStore",
  state: ()=>({
    socket: io(axios.defaults.baseURL+"")
  }),
  actions:{
    
  }
});