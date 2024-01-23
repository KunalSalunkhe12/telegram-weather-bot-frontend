import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TAdmin } from "./utils";

type TAuthStore = {
  admin: TAdmin | null;
  addAdmin: (user: TAdmin) => void;
  removeAdmin: () => void;
};

const useAuthStore = create<TAuthStore>()(
  persist(
    (set) => ({
      admin: null,
      addAdmin: (user: TAdmin) => set({ admin: user }),
      removeAdmin: () => set({ admin: null }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
