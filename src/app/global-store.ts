import { create } from "zustand";
//toast
import { ToastAction } from "@/components/ui/toast";

// types
interface AuthState {
  uid: string;
  setUid: (val: string) => void;
  errorToast: (toast: any) => void;
}

export const useGlobalStore = create<AuthState>((set) => {
  return {
    uid: "",
    setUid: (val) => set({ uid: val }),
    errorToast: (toast) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: "Please try again!",
      });
    },
  };
});
