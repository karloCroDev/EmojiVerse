import React from "react";
import Logo from "@/app/globals/Logo";
import ModeToggle from "./ModeToggle";
import UserDropdown from "./UserDropdown";
import UserIcon from "./UserIcon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav>
      <ul className=" h-32 w-full flex items-center  px-6 sm:px-12 2xl:px-24 gap-x-4 animate-fade bg-background sm:border-0 border-b border-b-border z-10 ">
        <li>
          <Logo link="/main-page" />
        </li>
        <li className="ml-auto ">
          <ModeToggle />
        </li>
        <li>
          <Button className="py-8" variant="outline">
            <UserIcon />
          </Button>
        </li>
        <li>
          <hr className="h-16 bg-border w-0.5 border-none " />
        </li>
        <li>
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
