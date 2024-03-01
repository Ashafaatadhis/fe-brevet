import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://be-brevet.vercel.app/api";

const axiosInstance = axios.create({
  // baseURL: "https://be-brevet.vercel.app/api",
  baseURL: baseUrl,
  withCredentials: true,
});

// Intercept request and set Authorization header with bearer token
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("authToken")}`;
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const data: any = await axios.post(
        baseUrl + "/refreshToken",
        {},
        { withCredentials: true }
      );

      Cookies.set("authToken", data.data.accessToken);

      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
