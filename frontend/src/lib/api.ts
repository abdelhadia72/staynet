import axios from "axios";

const API_BASE_URL = "http://localhost:3007/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const signup = async (
  email: string,
  password: string,
  username: string,
): Promise<any> => {
  try {
    const response = await api.post("/auth/signup", {
      email,
      password,
      username,
      role: "user",
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default api;
