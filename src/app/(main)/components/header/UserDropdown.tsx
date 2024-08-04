"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiSignOutBold } from "react-icons/pi";
import { ChangeProfileModal, CreatePostModal } from "../modals/exports";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import { auth } from "@/app/firebase/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "@/app/globals/global-auth-store";

const UserDropdown = () => {
  const { username, pfp, initials } = useAuthState((state) => ({
    username: state.username,
    pfp: state.pfp,
    initials: state.initials,
  }));
  console.log(username);
  const { push } = useRouter();
  const signOutFn = () => {
    signOut(auth);
    push("/sign-in");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="sm:h-16   sm:border-2 rounded-full p-4 flex items-center gap-x-2 hover:bg-accent">
        <Avatar className="h-16 w-16 text-xl  sm:h-10 sm:w-10 sm:text-base ">
          <AvatarImage src={pfp} alt="Profile picture" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <h1 className="hidden sm:block font-semibold text-2xl">{username}</h1>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-6 sm:mr-0 w-48">
        <DropdownMenuItem
          className="sm:hidden"
          onSelect={(e) => e.preventDefault()}
        >
          <Dialog>
            <DialogTrigger>Create post</DialogTrigger>
            <CreatePostModal />
          </Dialog>
        </DropdownMenuItem>
        {/*  */}
        <DropdownMenuItem
          className="sm:hidden"
          onSelect={(e) => e.preventDefault()}
        >
          <Dialog>
            <DialogTrigger>Your profile</DialogTrigger>
            <ChangeProfileModal />
          </Dialog>
        </DropdownMenuItem>
        {/*  */}
        <DropdownMenuItem onClick={() => push(`${username}`)}>
          Public profile
        </DropdownMenuItem>
        {/*  */}
        <DropdownMenuItem
          className="bg-red-600 flex justify-between text-white"
          onClick={signOutFn}
        >
          Log out <PiSignOutBold className="size-6" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
