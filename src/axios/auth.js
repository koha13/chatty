import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/api" + "/auth",
  timeout: 5000
});

export default auth;
