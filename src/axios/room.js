import axios from "axios";

const room = axios.create({
  baseURL: "http://localhost:3005/api/room",
  timeout: 5000
});

export default room;
