import React from "react";
import ProfileBar from "@/app/(main)/components/sidebar/ProfileBar";
import WhoToFollow from "@/app/(main)/components/sidebar/WhoToFollow";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";

const getUsers = async () => {
  const usersSnapshot = await getDocs(collection(db, "users"));
  const data = usersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

const Sidebar = async () => {
  const users: any[] = await getUsers();
  return (
    <>
      <ProfileBar />
      <WhoToFollow users={users} />
    </>
  );
};

export default Sidebar;
