//Long story short I had to implement like this, some problems with caching

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const LinkAsButton: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    location: string;
  }
> = ({ location, className, children, ...rest }) => {
  const { push, refresh } = useRouter();
  return (
    <div
      {...rest}
      className={twMerge("cursor-pointer", className)}
      onClick={() => {
        push(`${location}`);
        refresh();
      }}
    >
      {children}
    </div>
  );
};

export default LinkAsButton;
