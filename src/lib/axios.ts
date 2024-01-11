import axios from "axios";
import API_ENDPOINTS from "../config/api";

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
