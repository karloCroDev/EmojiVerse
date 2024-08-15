"use client";
import React, { useEffect, useState } from "react";
import HeaderOfComponents from "../Reusables/HeaderOfComponents";
import RecommendedFollowers from "./RecommendedFollowers";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";

import { useAuthState } from "@/app/globals/global-auth-store";

const WhoToFollow = () => {
  const [display, setDsiplay] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);
  //If app grows, dont't map all users
  //Firebase
  const { uid } = useAuthState((state) => ({
    uid: state.uid,
  }));

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const data = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <aside className="border-2 rounded-3xl p-8  flex-col items-start gap-y-6 animate-fade hidden sm:flex">
      <HeaderOfComponents title="Who to follow" />
      <div
        className={`flex flex-col gap-y-4 flex-1 ${
          display ? "overflow-scroll" : "overflow-hidden"
        } w-full`}
      >
        {users
          .filter((item) => item.id !== uid)
          .sort(() => 0.5 - Math.random())
          .map((item) => (
            <RecommendedFollowers
              key={item.id}
              followers={item.followers.length}
              username={item.username}
              bio={item.bio}
              pfp={item.pfp}
              uid={item.uid}
            />
          ))}
      </div>
      {!display && users.length > 5 ? (
        <button
          className="font-semibold text-lg text-secondary cursor-pointer"
          onClick={() => setDsiplay(true)}
        >
          Show more
        </button>
      ) : null}
    </aside>
  );
};

export default WhoToFollow;
