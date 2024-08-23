import axios from "axios";

const API = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
  headers: { "Content-Type": "application/json" },
});

export default API;
