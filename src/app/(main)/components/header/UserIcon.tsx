"use client";
import React from "react";
import { useAuthState } from "@/app/globals/global-auth-store";
import { twMerge } from "tailwind-merge";
import { LuUser2 } from "react-icons/lu";
import LinkAsButton from "@/app/(main)/components/reusables/LinkAsButton";
const UserIcon = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"svg">) => {
  const uid = useAuthState((state) => state.uid);
  return (
    <LinkAsButton location={uid}>
      <LuUser2 {...rest} className={twMerge("size-8  sm:size-10", className)} />
    </LinkAsButton>
  );
};

export default UserIcon;
