import axios from "axios";

const BASE_URL_JWT = "http://localhost:8080/";

const JwtAI = axios.create({
  baseURL: BASE_URL_JWT,
});

export default JwtAI;
