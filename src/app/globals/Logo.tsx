import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../assets/Logo-emoji-verse.png";

const Logo = ({ link, pos }: { link: string; pos?: string }) => {
  return (
    <Link href={link} className={`${pos} `}>
      <Image
        src={LogoImg}
        alt="Logo"
        className="object-cover rounded-md h-20 w-64 "
      />
    </Link>
  );
};

export default Logo;
