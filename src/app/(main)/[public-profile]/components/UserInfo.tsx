"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthState } from "@/app/globals/global-auth-store";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { UserProps as UserInfoProps } from "../page";

const UserInfo: React.FC<UserInfoProps> = ({
  bio,
  followers,
  pfp,
  username,
  initials,
  id,
}) => {
  const uid = useAuthState((state) => state.uid);

  const [followUser, setFollowUser] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setFollowUser(followers?.includes(uid));
  }, [uid]);

  const followUserFn = async (actionFollow: boolean) => {
    actionFollow
      ? await updateDoc(doc(db, "users", id), {
          followers: arrayUnion(uid),
        })
      : await updateDoc(doc(db, "users", id), {
          followers: arrayRemove(uid),
        });
    setFollowUser(actionFollow);
    setCount((prev) => (actionFollow ? prev + 1 : prev - 1));
  };

  return (
    <>
      <div className="flex items-center gap-x-4 ">
        <Avatar className="sm:w-28 sm:h-28 w-16 h-16">
          <AvatarImage src={pfp} alt="" />
          <AvatarFallback className="text-xl sm:text-4xl font-semibold ">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold sm:text-5xl  text-3xl">{username}</h1>
          <p className="font-semibold text-sm lg:text-md mt-1">{bio}</p>
          <p className="font-semibold text-md lg:text-lg mt-1 text-secondary">
            Followers: {followers?.length + count}
          </p>
        </div>
        {!followUser ? (
          <Button
            className="ml-auto sm:text-3xl sm:p-8 rounded-full text-2xl p-6 font-semibold"
            onClick={async () => {
              await followUserFn(true);
            }}
          >
            Follow
          </Button>
        ) : (
          <Button
            variant="outline"
            className="rounded-full text-2xl font-semibold p-6 ml-auto"
            onClick={async () => await followUserFn(false)}
          >
            Unfollow
          </Button>
        )}
      </div>
      <hr className="bg-border h-[2px]" />
    </>
  );
};

export default UserInfo;
