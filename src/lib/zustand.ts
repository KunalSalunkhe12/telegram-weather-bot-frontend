import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUser } from "./utils";

type TAuthStore = {
  userProfile: TUser | null;
  addUser: (user: TUser) => void;
  removeUser: () => void;
};

const useAuthStore = create<TAuthStore>()(
  persist(
    (set) => ({
      userProfile: null,
      addUser: (user: TUser) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
