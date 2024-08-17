"use client";
import React from "react";
import { ChangeProfileModal, CreatePostModal } from "../modals/exports";

import { IoAddOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useAuthState } from "@/app/globals/global-auth-store";

const ProfileBar = () => {
  const { username, pfp, bio, initials, followers } = useAuthState((state) => ({
    username: state.username,
    pfp: state.pfp,
    initials: state.initials,
    bio: state.bio,
    followers: state.followers,
  }));

  return (
    <aside className="border-2 rounded-3xl overflow-hidden animate-fade hidden sm:block ">
      <div className="h-[75%] border-b-2 flex flex-col justify-center items-center gap-y-6 ">
        <Avatar className="w-[10rem] h-[10rem]">
          <AvatarImage src={pfp} alt="Profile picture" />
          <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-4xl">{username}</h1>
        <div className="flex flex-col">
          <p className="text-secondary">
            Followers: {followers.length ?? "...add bio"}
          </p>
          <p className="text-secondary">Bio: {bio || "...add bio"}</p>
        </div>
      </div>
      <div className="flex h-[25%]">
        <Dialog>
          <DialogTrigger className="flex-1 border-r-2 h-full hover:bg-secondary transition-colors flex justify-center items-center flex-col">
            <IoAddOutline className="size-20" />
            Create post
          </DialogTrigger>
          <CreatePostModal />
        </Dialog>
        <Dialog>
          <DialogTrigger className="flex-1 hover:bg-secondary transition-colors grid place-items-center text-2xl font-semibold">
            My Profile
          </DialogTrigger>
          <ChangeProfileModal />
        </Dialog>
      </div>
    </aside>
  );
};

export default ProfileBar;
