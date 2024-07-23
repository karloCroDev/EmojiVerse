import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/Logo-emoji-verse.png";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[100vh] w-full grid place-items-center relative">
      <Link href="/" className="absolute left-10 top-10 aspect-[4/3] h-[12rem]">
        <Image src={Logo} alt="Logo" className="object-contain rounded-lg" />
      </Link>
      {children}
    </main>
  );
};

export default layout;
