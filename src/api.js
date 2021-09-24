import axios from "axios";

const BASE_URL = "https://interview-8e4c5-default-rtdb.firebaseio.com";
const API = axios.create({ baseURL: BASE_URL });

export default API;