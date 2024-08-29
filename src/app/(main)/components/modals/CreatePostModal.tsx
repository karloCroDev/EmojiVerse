"use client";
import React, { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/app/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "@/app/globals/global-auth-store";

const EmojiTextarea = () => {
  const [contentText, setContentText] = useState("");
  const [getEmojis, setGetEmojis] = useState(false);

  const showEmojis = () => {
    setGetEmojis(!getEmojis);
  };

  //Copy pasted regex that can only display emojis
  const emojiRegex = /[\p{Emoji_Presentation}\u200D]+/gu;
  // Regex pattern to match letters, in case user types a letter
  const letterRegex = /[a-zA-Z]/gi;

  const handleChange = (e: any) => {
    const newText = e.target.value;

    // Check for letters and log a message
    if (letterRegex.test(newText)) {
      console.log("Error!");
    }

    const onlyEmojis = newText.match(emojiRegex)?.join("") || "";
    setContentText(onlyEmojis);
  };
  //Only contentText is chaning
  const checkDisabled = contentText.length < 5 && true;
  const { toast } = useToast();
  //Firebase
  const { uid } = useAuthState((state) => ({
    uid: state.uid,
  }));
  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      authorId: uid,
      content: contentText,
      date: new Date(),
      likes: [],
      comments: [],
    });
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create your own mysterious post 🤔❓</DialogTitle>
      </DialogHeader>
      <hr className="mt-[-4px]" />

      <label htmlFor="content" className="flex flex-col gap-y-2 relative">
        <h3 className="label-h3 !text-start">
          Secret message 🤨 (emojis only)
        </h3>

        <textarea
          id="content"
          placeholder="Enter atleast 5 emojis..."
          className="h-[20rem] border-2 resize-none placeholder:text-secondary pl-2 pt-2 rounded-lg bg-transparent"
          value={contentText}
          onChange={handleChange}
        />

        <div className="absolute w-full px-4 bottom-4 text-secondary flex justify-between items-end">
          <button>
            {getEmojis ? (
              <EmojiPicker
                onEmojiClick={(e) => {
                  setContentText(contentText + e.emoji);
                  showEmojis();
                }}
              />
            ) : (
              <MdEmojiEmotions
                className="hover:text-white size-10 transition-all"
                onClick={showEmojis}
              />
            )}
          </button>

          <DialogClose
            disabled={checkDisabled}
            className="disabled:cursor-not-allowed"
          >
            <Button
              disabled={checkDisabled}
              className="p-4 text-lg font-semi bold"
              onClick={() => {
                createPost();
                window.location.reload();
              }}
            >
              Post
            </Button>
          </DialogClose>
        </div>
      </label>
    </DialogContent>
  );
};

export default EmojiTextarea;
