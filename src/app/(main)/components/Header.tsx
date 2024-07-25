import React from "react";
import Image from "next/image";
import Logo from "../../assets/Logo-emoji-verse.png";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <nav>
      <ul className="w-full h-[200px] flex justify-between items-center px pt-0 bg-red-800">
        <li>
          <Link href="/main-page">
            <div className="h-[200px] aspect-[4/3]">
              <Image
                src={Logo}
                alt="Logo-image"
                className="object-contain rounded-lg"
              />
            </div>
          </Link>
        </li>
        <li>
          <ModeToggle />
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
