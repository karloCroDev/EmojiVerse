import React from "react";
import UserInfo from "./components/UserInfo";
import AllPosts from "./components/AllPosts";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/app/firebase/firebase";

const fetchAllPostsFromUser = async (uid: string) => {
  const q = query(collection(db, "posts"), where("authorId", "==", uid));
  return await getDocs(q);
};

export interface userProps {
  bio: string;
  followers: string[];
  messages: string;
  pfp: string;
  username: string;
  id: never;
}
const getUser = async (uid: string) => {
  const userSnapshot = await getDoc(doc(db, "users", uid));
  return { ...userSnapshot.data(), id: userSnapshot.id } as userProps; // 😑ts
};

const page = async (id: any) => {
  const uid: string = id.params["public-profile"];

  const posts = await fetchAllPostsFromUser(uid);
  const user = await getUser(uid);
  return (
    <div className="w-full h-full border-2 rounded-3xl p-7 animate-fade flex flex-col gap-y-4 overflow-scroll">
      <UserInfo
        bio={user?.bio}
        followers={user?.followers}
        messages={user?.messages}
        pfp={user?.pfp}
        username={user?.username}
        id={user?.id}
      />
      <AllPosts posts={posts} />
    </div>
  );
};

export default page;
