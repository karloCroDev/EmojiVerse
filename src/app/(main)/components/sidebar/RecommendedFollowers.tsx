"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { useAuthState } from "@/app/globals/global-auth-store";

interface RecommendedFollowersProps {
  pfp: string;
  username: string;
  bio: string;
  followers: string[];
  id: string;
}

const RecommendedFollowers = ({
  pfp,
  username,
  followers,
  bio,
  id,
}: RecommendedFollowersProps) => {
  const [followUser, setFollowUser] = useState(false);

  const uid = useAuthState((state) => state.uid);

  useEffect(() => {
    setFollowUser(followers.includes(uid));
  }, [uid]);

  const followUserFn = async (actionFollow: boolean) => {
    actionFollow
      ? await updateDoc(doc(db, "users", uid), {
          followers: arrayUnion(uid),
        })
      : await updateDoc(doc(db, "users", uid), {
          followers: arrayRemove(uid),
        });
    setFollowUser(actionFollow);
  };
  return (
    <aside className="flex items-center gap-x-4">
      <Avatar className="w-16 h-16">
        <AvatarImage alt="Profile picture" src={pfp} />
        <AvatarFallback className="text-xl">
          {username?.split(" ").map((x) => x[0].toUpperCase())}
        </AvatarFallback>
      </Avatar>
      <div>
        <Link href={`/${id}`}>
          <h2 className="text-xl font-semibold hover:underline cursor-pointer transition-[underline]">
            {username}
          </h2>
        </Link>
        <p className="text-sm">{bio}</p>
      </div>
      {!followUser ? (
        <Button
          className="text-lg font-semibold rounded-full ml-auto"
          onClick={() => followUserFn(true)}
        >
          Follow
        </Button>
      ) : (
        <Button
          variant="outline"
          className="text-lg font-semibold rounded-full ml-auto"
          onClick={() => followUserFn(false)}
        >
          Unfollow
        </Button>
      )}
    </aside>
  );
};

export default RecommendedFollowers;
