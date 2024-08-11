import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface RecommendedFollowersProps {
  pfp: string;
  username: string;
  bio: string;
  followers: number;
  uid: string;
}

const RecommendedFollowers = ({
  pfp,
  username,
  bio,
  followers,
  uid,
}: RecommendedFollowersProps) => {
  console.log(uid);
  return (
    <div className="flex items-center gap-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage alt="Profile picture" src={pfp} />
        <AvatarFallback className="text-xl">
          {username?.split(" ").map((x) => x[0].toUpperCase())}
        </AvatarFallback>
      </Avatar>
      <div>
        <Link href={`/${username}`}>
          <h2 className="text-xl font-semibold hover:underline cursor-pointer transition-[underline]">
            {username}
          </h2>
        </Link>
        <p className="text-sm">{bio}</p>
      </div>

      <Button className="button-rounded">Follow</Button>
    </div>
  );
};

export default RecommendedFollowers;
