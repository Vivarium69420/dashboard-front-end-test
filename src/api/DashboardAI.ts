import axios from "axios";

const BASE_URL_USER = "http://localhost:8081/";

const DashboardAI = axios.create({
  baseURL: BASE_URL_USER,
});

export default DashboardAI;
