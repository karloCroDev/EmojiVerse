import React from "react";
import Image from "next/image";
import Logo from "@/app/globals/Logo";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import UserDropdown from "./UserDropdown";
import { IoMdNotifications } from "react-icons/io";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <nav>
      <ul className="w-full h-[8rem] flex items-center px-24 gap-x-5">
        <li>
          <Logo link="/main-page" />
        </li>
        <li className="ml-auto ">
          <ModeToggle />
        </li>
        <li>
          <Button className="py-8" variant="outline">
            <IoMdNotifications className="size-10" />
          </Button>
        </li>
        <li>
          <hr className="h-16 bg-secondary w-0.5 " />
        </li>
        <li>
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
