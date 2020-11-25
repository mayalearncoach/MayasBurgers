import axios from "axios";

const instance = axios.create({
  baseURL: "https://mayas-burger-website.firebaseio.com/",
});

export default instance;
