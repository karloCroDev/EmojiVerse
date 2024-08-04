import { create } from "zustand";

// types
interface AuthState {
  uid: string;
  setUid: (val: string) => void;
  username: string;
  setUsername: (val: string) => void;
  initials: string;
  pfp: string;
  setPfp: (val: string) => void;
}

export const useAuthState = create<AuthState>((set) => {
  return {
    uid: "",
    setUid: (val) => set({ uid: val }),
    username: "",
    setUsername: (val) =>
      set({
        username: val,
        initials: val
          .split(" ")
          .map((l) => l[0].toUpperCase())
          .join(""),
      }),
    initials: "",
    pfp: "",
    setPfp: (val) => set({ pfp: val }),
  };
});
