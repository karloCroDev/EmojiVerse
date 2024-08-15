"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { useAuthState } from "@/app/globals/global-auth-store";

interface CommentProps {
  docId: string;
  likes: string[];
}

const Comments = ({ likes, docId }: CommentProps) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const comment = useRef<HTMLInputElement | null>(null);

  const uid = useAuthState((state) => state.uid);

  const sendComment = async () => {
    const element = comment.current as HTMLInputElement;
    if (element) {
      await updateDoc(doc(db, "posts", docId), {
        comments: arrayUnion({ content: element.value, authorCommentId: uid }),
      });
      element.value = "";
      //toast message
    }
  };

  const markPost = async (actionLike: boolean) => {
    actionLike
      ? await updateDoc(doc(db, "posts", docId), {
          likes: arrayUnion(uid),
        })
      : await updateDoc(doc(db, "posts", docId), {
          likes: arrayRemove(uid),
        });
  };

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
        {!likes.includes(uid) && !liked ? (
          <button
            onClick={async () => {
              setLiked(true);
              await markPost(true);
              //Make toast
            }}
          >
            <FaRegHeart className="size-6 text-secondary cursor-pointer" />
          </button>
        ) : (
          <button
            onClick={async () => {
              setLiked(false);
              await markPost(false);
              //Make toast
            }}
          >
            <FaHeart className="size-6 cursor-pointer text-red-600" />
          </button>
        )}
      </div>

      {/* Real comments */}
      {showComments ? (
        <>
          <article className="flex flex-col items-start gap-y-4 relative max-h-60 overflow-scroll ">
            <div className="w-full">
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

                <p className="text-secondary">Followers: 0</p>
              </div>
              <p className="text-lg text-center w-full">
                Hmmmm... does this mean impossible mission
              </p>
            </div>
          </article>

          <div className="w-full border-2 h-16 rounded-md flex items-center justify-end pr-4 relative">
            <input
              type="text"
              placeholder="Try to guess what emojis mean..."
              className="w-full h-full bg-transparent rounded-md pl-4 text-lg placeholder:text-secondary absolute left-0 top-0"
              ref={comment}
            />
            <Button
              variant="ghost"
              className="bg-transparent p-1 rounded-lg z-10"
              onClick={sendComment}
              disabled={comment.current?.value.length === 0}
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
