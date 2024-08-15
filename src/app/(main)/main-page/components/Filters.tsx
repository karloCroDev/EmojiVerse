"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterStore } from "./filter-store";

const Filters = () => {
  const { setFilterInput, setFilterSelect } = useFilterStore((state) => ({
    setFilterInput: state.setFilterInput,
    setFilterSelect: state.setFilterSelect,
  }));

  return (
    <div className="flex-1 flex justify-between items-center">
      <input
        type="text"
        className="filter-input"
        placeholder="#Search"
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <Select onValueChange={(val) => setFilterSelect(val)}>
        <SelectTrigger className="filter-input flex justify-between items-center">
          <SelectValue placeholder="Recommended" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="following">Following</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
