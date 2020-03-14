import axios from "axios";

const message = axios.create({
  baseURL: "http://localhost:3005/api/message",
  timeout: 5000
});

export default message;
