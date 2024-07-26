import React from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
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
    <div className="h-[20rem] border-2 rounded-xl mt-5 p-8 flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
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
        <Button className="button-rounded">Follow</Button>
      </div>
      <p className="flex-1 flex justify-center">{content}</p>
      <div className="flex items-center justify-between">
        <p className="text-secondary text-xl font-semibold flex items-center gap-2 cursor-pointer w-fit">
          Comments
          <FaRegComments />
        </p>
        <FaRegHeart className="size-6 text-secondary cursor-pointer" />
        {/* <FaHeart className="size-6 text-secondary cursor-pointer text-red-600" /> */}
      </div>
    </div>
  );
};

export default Posts;
