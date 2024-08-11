import { create } from "zustand";

interface LogicState {
  users: any[];
  setUsers: (val: any) => void;
}

export const useLogicState = create<LogicState>((set) => {
  return {
    users: [],
    setUsers: (val) =>
      set({
        users: val,
      }),
  };
});
