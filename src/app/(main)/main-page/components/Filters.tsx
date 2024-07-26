import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Filters = () => {
  return (
    <div className="flex-1 flex justify-between items-center">
      <input type="text" className="filter-input" placeholder="#Search" />
      <Select>
        <SelectTrigger className="filter-input flex justify-between items-center">
          <SelectValue placeholder="Recommended" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="followers">Followers</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
