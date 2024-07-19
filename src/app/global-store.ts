import { create } from "zustand";

interface AuthState {
  uid: string;
  setUid: (val: string) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  return {
    uid: "",
    setUid: (val) => set({ uid: val }),
  };
});
