import axios from "axios";

const message = axios.create({
  baseURL: "http://localhost:3000/api/message",
  timeout: 5000
});

export default message;
