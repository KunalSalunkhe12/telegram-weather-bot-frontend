import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TUser = {
  name: string;
  email: string;
  sub: string;
};

export const handleGoogleLogin = async (
  userCredential: string,
  addUser: (user: TUser) => void
) => {
  const decodedToken: { name: string; email: string; sub: string } =
    jwtDecode(userCredential);

  const user = {
    name: decodedToken.name,
    email: decodedToken.email,
    sub: decodedToken.sub,
  };

  addUser(user);
};
