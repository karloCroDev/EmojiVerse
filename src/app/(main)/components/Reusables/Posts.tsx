import React from "react";
import Link from "next/link";
import Comments from "./Comments";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostsProps {
  username: string;
  pfp: string;
  bio: string;
  content: string;
  docId: string;
  followers: string[];
  likes: string[];
  comments: Object[];
  uid: string;
}

const Posts = ({
  username,
  pfp,
  bio,
  content,
  docId,
  followers,
  likes,
  comments,
  uid,
}: PostsProps) => {
  const initals = username.split(" ").map((x) => x[0].toUpperCase());

  return (
    <div className="border-b rounded-none sm:rounded-xl sm:border-2  mt-2 sm:mt-5 py-4 sm:p-8 flex flex-col gap-y-8 h-max-[50rem]">
      <div className="flex items-center gap-x-4">
        <Avatar className="sm:w-16 sm:h-16 h-12 w-12 ">
          <AvatarImage src={pfp} alt={`${username} pfp`} />
          <AvatarFallback className="sm:text-2xl text-md font-semibold">
            {initals}
          </AvatarFallback>
        </Avatar>
        <div className="h-full flex flex-col justify-center">
          <Link href={`/${uid}`}>
            <h2 className="text-2xl font-semibold hover:underline cursor-pointer transition-[underline] ">
              {username}
            </h2>
          </Link>
          <p className="text-sm"> {bio}</p>
        </div>
        <p className="text-secondary ml-auto text-xl">
          Followers: {followers.length}
        </p>
      </div>
      <p className="flex-1 flex justify-center text-center">{content}</p>
      <Comments likes={likes} docId={docId} comments={comments} />
    </div>
  );
};

export default Posts;
