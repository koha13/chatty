import axios from "axios";

const user = axios.create({
  baseURL: "http://localhost:3005/api/user",
  timeout: 5000
});

export default user;
