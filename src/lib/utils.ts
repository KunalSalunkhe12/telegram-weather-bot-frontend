import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";
import { createAdmin } from "@/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TAdmin = {
  name: string;
  email: string;
  sub: string;
};

export const handleGoogleLogin = async (
  userCredential: string,
  addAdmin: (admin: TAdmin) => void
) => {
  const decodedToken: { name: string; email: string; sub: string } =
    jwtDecode(userCredential);

  const user = {
    name: decodedToken.name,
    email: decodedToken.email,
    sub: decodedToken.sub,
  };

  const admin = await createAdmin(user);
  addAdmin(admin);
};
