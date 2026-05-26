import axios from "axios";

const apiClient =
  axios.create({
    baseURL:
      "https://madrasha-backend.onrender.com/api",
  });

apiClient.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "adminToken"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export default apiClient;
