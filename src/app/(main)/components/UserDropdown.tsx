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
import SignInImage from "../../assets/sign-in-img.jpg";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-full p-5 w-[200px] ">
        <div className="rounded-full w-[50px] h-[50px] flex justify-between">
          <Image
            src={SignInImage}
            alt="User s profile picture"
            className="h-full"
          />
          <h1 className="flex-1">Hello world</h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
