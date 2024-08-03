"use client";
import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

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
          placeholder="Win: Win + . | Mac: fn + click "
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

          <DialogClose>
            <Button
              className="p-4 text-lg font-semi bold"
              onClick={() => {
                setGetEmojis(false);
                console.log("Hello world");
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
