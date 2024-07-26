import axios from "axios";

const backend_url = "https://well-nest-server.vercel.app/api";
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
