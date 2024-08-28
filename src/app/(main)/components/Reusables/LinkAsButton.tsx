//I need to route like this because I need to refresh cache in case of

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const LinkAsButton: React.FC<
  React.ComponentPropsWithoutRef<"p"> & {
    location: string;
  }
> = ({ location, className, children, ...rest }) => {
  const { push, refresh } = useRouter();
  return (
    <p
      {...rest}
      className={twMerge("cursor-pointer", className)}
      onClick={() => {
        push(`${location}`);
        refresh();
      }}
    >
      {children}
    </p>
  );
};

export default LinkAsButton;
