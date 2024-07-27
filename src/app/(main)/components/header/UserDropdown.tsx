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
import { PiSignOutBold } from "react-icons/pi";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDropdown = () => {
  const username = "IvanHorvat";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-[4.5rem] border-2 rounded-full w-56 p-4 flex items-center gap-x-2 hover:bg-accent">
        <Avatar>
          <AvatarImage alt="Profile picture" />
          <AvatarFallback>IH</AvatarFallback>
        </Avatar>
        <h1 className="font-semibold text-2xl">Ivan Horvat</h1>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <Link href={`/${username}`}>
          <DropdownMenuItem>Public-profile</DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="bg-red-600 flex justify-between text-white">
          Log out <PiSignOutBold className="size-6" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
