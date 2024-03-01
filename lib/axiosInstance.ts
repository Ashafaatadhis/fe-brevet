import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://be-brevet.vercel.app/api",
  withCredentials: true,
});

// Intercept request and set Authorization header with bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("authToken");

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
