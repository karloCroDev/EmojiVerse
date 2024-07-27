import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const UserInfo = () => {
  return (
    <>
      <section className="flex items-center gap-x-4 ">
        <Avatar className="w-28 h-28">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="text-4xl font-semibold">AH</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-5xl">Ana Horvat</h1>
          <p className="font-semibold text-xl mt-1">🤪🤪🤪🤪🤪</p>
        </div>
        <Button className="ml-auto text-3xl p-8 rounded-full">Follow</Button>
      </section>
      <hr className="bg-border h-[2px]" />
    </>
  );
};

export default UserInfo;
