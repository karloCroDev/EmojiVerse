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
      <ul className="h-[8rem] flex items-center px-4 sm:px-24 gap-x-4 animate-fade ">
        <li>
          <Logo link="/main-page" />
        </li>
        <li className="ml-auto ">
          <ModeToggle />
        </li>
        <li>
          <Button className="py-8" variant="outline">
            <IoMdNotifications className=" size-8  sm:size-10" />
          </Button>
        </li>
        <li>
          <hr className="h-16 bg-border w-0.5 " />
        </li>
        <li>
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
