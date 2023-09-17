import axios from "axios";

const instance = axios.create({
  //loacl host
  baseURL: "http://localhost:8001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
