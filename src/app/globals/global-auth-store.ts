import { create } from "zustand";

// types
interface AuthState {
  uid: string;
  setUid: (val: string) => void;
  username: string;
  setUsername: (val: any) => void;
  initials: string;
  setInitials: (val: any) => void;
  pfp: string;
  setPfp: (val: string) => void;
  bio: string;
  setBio: (val: string) => void;
  followers: string[];
  setFollowers: (val: string[]) => any;
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
      }),
    initials: "",
    setInitials: (val) => set({ initials: val }),
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
