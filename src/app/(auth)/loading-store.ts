import { create } from "zustand";

interface LoadingState {
  authProcess: boolean;
  setAuthProcess: (val: boolean) => void;
}

export const useLoadingState = create<LoadingState>((set) => {
  return {
    authProcess: false,
    setAuthProcess: (val) => set({ authProcess: val }),
  };
});
