import { defineStore } from "pinia";
import { io } from 'socket.io-client';
export const SocketStore = defineStore({
  id: "socketStore",
  state: ()=>({
    socket: io("http://localhost:3000")
  }),
  actions:{
  }
});