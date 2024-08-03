import React from "react";
import Link from "next/link";
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
    <section className="sm:border-2 rounded-xl mt-5 py-4 sm:p-8 flex flex-col gap-y-4 h-max-[50rem]">
      <div className="flex items-center gap-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={pfp} alt={`${username} pfp`} />
          <AvatarFallback className="text-2xl font-semibold">
            {initals}
          </AvatarFallback>
        </Avatar>
        <div className="h-full flex flex-col justify-center">
          <Link href={`/${username}`}>
            <h2 className="text-2xl font-semibold hover:underline cursor-pointer transition-[underline] ">
              {username}
            </h2>
          </Link>
          <p className="text-sm"> {bio}</p>
        </div>
        <Button className="button-rounded ">Follow</Button>
      </div>
      <p className="flex-1 flex justify-cente text-center">{content}</p>
      <Comments />
    </section>
  );
};

export default Posts;
