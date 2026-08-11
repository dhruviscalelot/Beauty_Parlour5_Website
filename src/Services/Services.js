import axios from "axios";
import toast from "react-hot-toast";

export const API_BASE_URL = import.meta.env.VITE_API_URL;

// 🔹 axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL
});

// 🔹 Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;

  // ❌ don't override if FormData
  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response?.data?.IsSuccess || response?.data?.isSuccess || response?.data?.success) {
      // toast.success(response?.data?.Message);
    } else {
      toast.error(response?.data?.Message);
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    toast.error(error?.response.data.Message || "Something went wrong!");
    console.error("Axios Error:", error);
    const errorMessage =
      error?.response?.data?.Message || error?.response?.data?.message;
    if (typeof errorMessage === "string") {
      toast.error(errorMessage || "Something went wrong!");
    } else if (Array.isArray(errorMessage)) {
      errorMessage.forEach((msg) => toast.error(msg || "Something went wrong!"));
    } else {
      toast.error("Something went wrong!");
    }

    return Promise.reject(error);
  }
);

// 🔹 Auth APIs
export const login = (data) => api.post("user/send-otp", data);

// 🔹 General APIs
export const submitInquiry = (data) => api.post("user/inquiries/submit", data);
export const getHomeData = () => api.get("user/website/home-data");
