import React from "react";

import Image from "next/image";
import LogoImg from "@/app/assets/Logo-emoji-verse.png";
import LinkAsButton from "@/app/(main)/components/reusables/LinkAsButton";

const Logo = ({ link, pos }: { link: string; pos?: string }) => {
  return (
    <LinkAsButton location={link} className={`${pos} `}>
      <Image
        src={LogoImg}
        alt="Logo"
        className="object-cover rounded-md w-48 xl:h-20 xl:w-64"
      />
    </LinkAsButton>
  );
};

export default Logo;
