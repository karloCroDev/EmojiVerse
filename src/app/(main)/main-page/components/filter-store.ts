import { create } from "zustand";

interface FilterStore {
  filterInput: string;
  setFilterInput: (val: string) => void;
  filterSelect: string;
  setFilterSelect: (val: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => {
  return {
    filterInput: "",
    setFilterInput: (val) => set({ filterInput: val }),
    filterSelect: "recommended",
    setFilterSelect: (val) => set({ filterSelect: val }),
  };
});
