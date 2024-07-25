import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/app/globals/global-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import pfpImg from "../../assets/Logo-emoji-verse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-[4.5rem] border-2 rounded-full w-56 p-4 flex items-center gap-x-2 hover:bg-accent">
        <Avatar>
          <AvatarImage
            src={
              "https://petapixel.com/assets/uploads/2022/12/what-is-unsplash.jpg"
            }
            alt="Profile picture"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-semibold text-2xl">Ivan Horvat</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <Link href="/profile">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
