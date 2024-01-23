import { TAdmin } from "@/lib/utils";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_API_URL,
});

export const createAdmin = async (admin: TAdmin) => {
  const { data } = await API.post("/admin", { ...admin });
  return data;
};

export const setWeatherApiKey = async (weatherApiKey: string, sub: string) => {
  const { data } = await API.put("/admin/weather-api-key", {
    weatherApiKey,
    sub,
  });
  return data;
};

export const getUsers = async () => {
  const { data } = await API.get("/admin/users");
  return data;
};

export const blockUser = async (chat_id: number, blocked: boolean) => {
  const { data } = await API.put(`/admin/users/${chat_id}`, { blocked });
  return data;
};

export const deleteUser = async (chat_id: number) => {
  const { data } = await API.delete(`/admin/users/${chat_id}`);
  return data;
};
