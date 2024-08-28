"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeaderOfComponents from "../Reusables/HeaderOfComponents";
import RecommendedFollowers from "./RecommendedFollowers";
import { useAuthState } from "@/app/globals/global-auth-store";

interface UserProps {
  id: string;
  username: string;
  bio: string;
  pfp: string;
  followers: string[];
}
const WhoToFollow = ({ users }: { users: UserProps[] }) => {
  //If app grows, dont't map all users
  //Firebase
  const { uid } = useAuthState((state) => ({
    uid: state.uid,
  }));

  //Preventing hydration error like this because of filtering the items (I have to use it because of useState() hook)
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <div className="border-2 rounded-3xl p-8  flex-col items-start gap-y-6 animate-fade  h-full md:mt-4 2xl:mt-8 hidden lg:flex">
        <HeaderOfComponents>Recommended users</HeaderOfComponents>
        <div
          className={`flex flex-col gap-y-4 flex-1 overflow-scroll 
         w-full`}
        >
          {users
            .filter((item) => item.id !== uid)
            .sort(() => 0.5 - Math.random())
            .map((item) => (
              <RecommendedFollowers
                key={item.id}
                username={item.username}
                bio={item.bio}
                pfp={item.pfp}
                id={item.id}
              />
            ))}
        </div>
      </div>
    );
};

export default WhoToFollow;
