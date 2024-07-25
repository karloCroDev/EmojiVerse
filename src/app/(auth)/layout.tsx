import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../globals/Logo";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[100vh] w-full grid place-items-center relative">
      <Logo link="/" pos="absolute top-10 left-10" />
      {children}
    </main>
  );
};

export default layout;
