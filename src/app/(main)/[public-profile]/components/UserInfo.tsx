import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const UserInfo = () => {
  return (
    <>
      <section className="flex items-center gap-x-4 ">
        <Avatar className="sm:w-28 sm:h-28 w-16 h-16">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="text-xl sm:text-4xl font-semibold ">
            AH
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold sm:text-5xl  text-3xl">Ana Horvat</h1>
          <p className="font-semibold text-sm sm:text-xl mt-1">🤪🤪🤪🤪🤪</p>
        </div>
        <Button className="ml-auto sm:text-3xl sm:p-8 rounded-full text-2xl p-6 font-semibold">
          Follow
        </Button>
      </section>
      <hr className="bg-border h-[2px]" />
    </>
  );
};

export default UserInfo;
