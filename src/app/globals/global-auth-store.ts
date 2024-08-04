import { create } from "zustand";

// types
interface AuthState {
  uid: string;
  setUid: (val: string) => void;
  username: string;
  setUsername: (val: string) => void;
  pfp: string;
  setPfp: (val: string) => void;
}

export const useAuthState = create<AuthState>((set) => {
  return {
    uid: "",
    setUid: (val) => set({ uid: val }),
    username: "",
    setUsername: (val) => set({ username: val }),
    pfp: "",
    setPfp: (val) => set({ pfp: val }),
  };
});
