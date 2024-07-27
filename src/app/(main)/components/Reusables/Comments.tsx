"use client";
import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Comments = () => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState("");
  console.log(comment);
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className="text-secondary text-xl font-semibold flex items-center gap-2 cursor-pointer w-fit"
          onClick={() => setShowComments(!showComments)}
        >
          {!showComments ? "Comments" : "Hide comments"}
          <FaRegComments />
        </button>
        {!liked ? (
          <button onClick={() => setLiked(true)}>
            <FaRegHeart className="size-6 text-secondary cursor-pointer" />
          </button>
        ) : (
          <button onClick={() => setLiked(false)}>
            <FaHeart className="size-6 cursor-pointer text-red-600" />
          </button>
        )}
      </div>
      {showComments ? (
        <>
          <section className="flex flex-col items-start gap-y-4 relative max-h-[21rem] overflow-scroll ">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-x-2">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="" alt={`pfp`} />
                  <AvatarFallback className="text-lg font-semibold">
                    IH
                  </AvatarFallback>
                </Avatar>
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-xl font-semibold ">Ivan</h2>
                  <p className="text-sm">🤪🤪🤪🤪🤪</p>
                </div>
              </div>
              <p className="text-lg">
                Hmmmm... does this mean impossible mission
              </p>
              <Button className="button-rounded-ml0 text-sm">Follow</Button>
            </div>
          </section>
          <div className="w-full border-2 h-16 rounded-md flex items-center justify-end pr-4 relative">
            <input
              type="text"
              placeholder="Your comment..."
              className="w-full h-full bg-transparent rounded-md pl-4 text-lg placeholder:text-secondary absolute left-0 top-0"
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              variant="ghost"
              className="bg-transparent p-1 rounded-lg z-10"
            >
              <IoIosSend className="size-8 cursor-pointer text-primary " />
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Comments;