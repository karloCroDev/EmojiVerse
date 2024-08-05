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
  followers: number;
  setFollowers: (val: number) => void;
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
    followers: 0,
    setFollowers: (val) => set({ followers: val }),
  };
});
