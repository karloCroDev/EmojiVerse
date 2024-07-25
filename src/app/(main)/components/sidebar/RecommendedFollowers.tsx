import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const RecommendedFollowers = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage alt="Profile picture" />
        <AvatarFallback className="text-xl">AH</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold">Ana Horvat</h2>
        <p className="text-sm">🤪🤪🤪🤪🤪</p>
      </div>
      <Button className="text-lg font-semibold rounded-full px-6 ml-auto">
        Follow
      </Button>
    </div>
  );
};

export default RecommendedFollowers;
