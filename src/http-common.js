import axios from "axios";

export default axios.create({
  baseURL: "https://whispering-atoll-17177.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
