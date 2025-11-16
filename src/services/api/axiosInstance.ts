import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedRequests: (() => void)[] = [];

const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get("refresh");
    if (!refreshToken) throw new Error("No refresh token");

    const response = await axiosInstance.post("/auth/token/refresh/", {
      refresh: refreshToken,
    });
    const { access, refresh: newRefresh } = response.data;

    Cookies.set("access", access, {
      expires: new Date(Date.now() + 15 * 60 * 1000),
      secure: true,
      sameSite: "Strict",
    });

    if (newRefresh) {
      Cookies.set("refresh", newRefresh, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
    }

    return access;
  } catch (error) {
    Cookies.remove("access");
    Cookies.remove("refresh");
    return Promise.reject(error);
  }
};

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("access");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          failedRequests.push(() => resolve(axiosInstance(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        failedRequests.forEach((cb) => cb());
        failedRequests = [];
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export { axiosInstance as api };
