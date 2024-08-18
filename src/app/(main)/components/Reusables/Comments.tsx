"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { useAuthState } from "@/app/globals/global-auth-store";

interface CommentProps {
  docId: string;
  likes: string[];
  comments: any[];
}

const Comments = ({ likes, docId, comments }: CommentProps) => {
  const { uid, username, pfp, followers } = useAuthState((state) => ({
    uid: state.uid,
    username: state.username,
    pfp: state.pfp,
    followers: state.followers,
  }));

  //Liking the post
  const [liked, setLiked] = useState(likes.includes(uid));
  const markPost = async (actionLike: boolean) => {
    actionLike
      ? await updateDoc(doc(db, "posts", docId), {
          likes: arrayUnion(uid),
        })
      : await updateDoc(doc(db, "posts", docId), {
          likes: arrayRemove(uid),
        });
  };
  //Uid is fetch a bit later than array, and if I put inside the useState it acctualy wont work
  useEffect(() => {
    setLiked(likes.includes(uid));
  }, [uid]);

  const [likeCount, setLikeCount] = useState(likes.length);
  const [showComments, setShowComments] = useState(false);

  const [newComment, setNewComment] = useState("");
  const commentBtnRef = useRef<HTMLButtonElement | null>(null);

  const [userDataGlobal, setUserDataGlobal] = useState<any>([]);
  const sendComment = async () => {
    await updateDoc(doc(db, "posts", docId), {
      comments: arrayUnion({ content: newComment, authorCommentId: uid }),
    });
    setUserDataGlobal([
      ...userDataGlobal,
      {
        content: newComment,
        username: username,
        followers: followers,
        pfp: pfp,
      },
    ]);
    setNewComment("");

    //toast message
  };

  //Dont fetch instead utilize already fetched user
  useEffect(() => {
    const fetchData = async () => {
      const userDataArray = await Promise.all(
        comments.map(async (comment) => {
          const userSnapshot = await getDoc(
            doc(db, "users", comment.authorCommentId)
          );

          if (userSnapshot.exists()) {
            return { ...userSnapshot.data(), ...comment };
          }
          return null;
        })
      );

      // Filter out null values in case any userSnapshot didn't exist

      setUserDataGlobal(userDataArray);
    };

    fetchData();
  }, []);
  console.log(userDataGlobal);
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
        <div className="flex text-secondary items-center gap-2">
          {liked ? (
            <button
              onClick={async () => {
                await markPost(false);
                setLiked(false);
                setLikeCount((prev) => prev - 1);

                //Make toast
              }}
            >
              <FaHeart className="size-6 cursor-pointer text-red-600" />
            </button>
          ) : (
            <button
              onClick={async () => {
                await markPost(true);
                setLiked(true);
                setLikeCount((prev) => prev + 1);
                //Make toast!
              }}
            >
              <FaRegHeart className="size-6  cursor-pointer" />
            </button>
          )}
          <p className="text-xl">{likeCount}</p>
        </div>
      </div>

      {/* Real comments */}
      {showComments ? (
        <>
          {userDataGlobal.map((userData: Record<string, string>) => (
            <article className="flex flex-col items-start gap-y-4 relative max-h-60 overflow-scroll ">
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-x-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={userData.pfp} alt={`pfp`} />
                      <AvatarFallback className="text-lg font-semibold">
                        {userData.username
                          .split(" ")
                          .map((l: string) => l[0].toUpperCase())}
                      </AvatarFallback>
                    </Avatar>
                    <div className="h-full flex flex-col justify-center">
                      <h2 className="text-xl font-semibold ">
                        {userData.username}
                      </h2>
                      <p className="text-sm">{userData.bio}</p>
                    </div>
                  </div>

                  <p className="text-secondary">
                    Followers: {userData.followers.length}
                  </p>
                </div>
                <p className="text-lg text-center w-full">{userData.content}</p>
              </div>
            </article>
          ))}

          <div className="w-full border-2 h-16 rounded-md flex items-center justify-end pr-4 relative">
            <input
              type="text"
              placeholder="Try to guess what emojis mean..."
              className="w-full h-full bg-transparent rounded-md pl-4 text-lg placeholder:text-secondary absolute left-0 top-0"
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" ? commentBtnRef.current?.click() : null
              }
              value={newComment}
            />
            <Button
              variant="ghost"
              className="bg-transparent p-1 rounded-lg z-10"
              onClick={sendComment}
              disabled={newComment.length === 0}
              ref={commentBtnRef}
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
