import React from "react";
import Comments from "./Comments";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
interface PostsProps {
  username: string;
  pfp: string;
  bio: string;
  content: string;
}

const Posts = ({ username, pfp, bio, content }: PostsProps) => {
  const initals = username.split(" ").map((x) => x[0].toUpperCase());
  return (
    <section className=" border-2 rounded-xl mt-5 p-8 flex flex-col gap-y-4 h-max-[50rem]">
      <div className="flex items-center gap-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="" alt={`${username} pfp`} />
          <AvatarFallback className="text-2xl font-semibold">
            {initals}
          </AvatarFallback>
        </Avatar>
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold ">{username}</h2>
          <p className="text-sm"> {bio}</p>
        </div>
        <Button className="button-rounded ">Follow</Button>
      </div>
      <p className="flex-1 flex justify-center">{content}</p>
      <Comments />
    </section>
  );
};

export default Posts;
