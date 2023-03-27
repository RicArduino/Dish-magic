import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
  // Authorization: "Bearer " + localStorage.getItem("token")
});
