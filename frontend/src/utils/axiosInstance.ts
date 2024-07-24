import axios from "axios";

const backend_url = "http://127.0.0.1:5000/api";
const axiosInstance = axios.create({
  baseURL: backend_url,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
