import axios from "axios";

const instance = axios.create({
  //loacl host
  // baseURL: "http://localhost:8001/",
  baseURL: "https://noteapp-1-i1ma.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
