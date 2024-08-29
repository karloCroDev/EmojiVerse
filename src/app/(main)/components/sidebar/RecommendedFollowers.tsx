"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LinkAsButton from "@/app/(main)/components/reusables/LinkAsButton";
import { useRouter } from "next/navigation";

interface RecommendedFollowersProps {
  pfp: string;
  username: string;
  bio: string;
  id: string;
}

const RecommendedFollowers = ({
  pfp,
  username,
  bio,
  id,
}: RecommendedFollowersProps) => {
  const { refresh, push } = useRouter();
  return (
    <aside className="flex items-center gap-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage alt="Profile picture" src={pfp} />
        <AvatarFallback className="text-xl">
          {username?.split(" ").map((x) => x[0].toUpperCase())}
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold  transition-[underline]">
          {username}
        </h2>

        <p className="text-sm">{bio}</p>
      </div>
      <LinkAsButton className="ml-auto" location={id}>
        <Button className=" text-xl rounded-full px-6 font-semibold">
          Visit
        </Button>
      </LinkAsButton>
    </aside>
  );
};

export default RecommendedFollowers;
