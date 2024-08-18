"use client";
import React from "react";
import { useAuthState } from "@/app/globals/global-auth-store";
import { twMerge } from "tailwind-merge";
import { LuUser2 } from "react-icons/lu";
import Link from "next/link";
const UserIcon = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"svg">) => {
  const uid = useAuthState((state) => state.uid);
  return (
    <Link href={`/${uid}`}>
      <LuUser2 {...rest} className={twMerge("size-8  sm:size-10", className)} />
    </Link>
  );
};

export default UserIcon;
