import { create } from "zustand";

// types
interface AuthState {
  uid: string;
  setUid: (val: string) => void;
  username: string;
  setUsername: (val: any) => void;
  initials: string;
  pfp: string;
  setPfp: (val: string) => void;
  bio: string;
  setBio: (val: string) => void;
  followers: string[];
  setFollowers: (val: string[]) => void;
  user: any;
  setUser: (val: object) => void;
}

export const useAuthState = create<AuthState>((set) => {
  return {
    uid: "",
    setUid: (val) => set({ uid: val }),
    username: "",
    setUsername: (val) =>
      set({
        username: val,
        initials:
          val !== "" &&
          val
            .split(" ")
            .map((l: string) => l[0].toUpperCase())
            .join(""),
      }),
    initials: "",
    pfp: "",
    setPfp: (val) => set({ pfp: val }),
    bio: "",
    setBio: (val) => set({ bio: val }),
    followers: [],
    setFollowers: (val) => set({ followers: val }),
    user: {},
    setUser: (val) => set({ user: val }),
  };
});
