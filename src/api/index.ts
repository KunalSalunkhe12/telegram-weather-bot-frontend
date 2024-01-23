import { TUser } from "@/lib/utils";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_API_URL,
});

export const createAdmin = async (user: TUser) => {
  const { data } = await API.post("/admin", { user });
  return data;
};
