import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileBar = () => {
  return (
    <aside className="border-2 rounded-3xl ">
      <div className="h-[75%] border-b-2 flex flex-col justify-center items-center gap-y-6">
        <Avatar className="w-[10rem] h-[10rem]">
          <AvatarImage alt="Profile picture" />
          <AvatarFallback className="text-4xl">IH</AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-4xl">Ivan Horvat</h1>
        <p className="text-secondary">Bio:🤪🤪🤪🤪🤪🤪</p>
      </div>
      <div className="flex h-[25%]">
        <div className="flex-1 border-r-2 h-full ">
          <Link
            href="/create-post"
            className="h-full flex justify-center items-center flex-col"
          >
            <IoAddOutline className="size-20" />
            <h1>Create post</h1>
          </Link>
        </div>
        <div className="flex-1">
          <Link
            href="/profile"
            className="w-full h-full grid place-items-center text-2xl font-semibold"
          >
            My Profile
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProfileBar;
