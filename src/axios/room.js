import axios from "axios";

const room = axios.create({
  baseURL: "http://localhost:3000/api/room",
  timeout: 5000
});

export default room;
