import axios from "axios";
const BASE_URL = "https://react-bank-project.eapi.joincoded.com";
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export  {instance, BASE_URL};
