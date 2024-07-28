"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { FaCamera } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

const ChangeProfileModal = () => {
  const username = "Ana Horvat";
  const { push } = useRouter();

  const [changeUsername, setChangeUsername] = useState("");
  const [changeBio, setChangeBio] = useState("");
  const [changePassword, setChangePassword] = useState("");

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Your profile</DialogTitle>
      </DialogHeader>
      <hr className="mt-[-4px]" />
      <div className="w-full flex flex-col items-center gap-y-4">
        <label htmlFor="picture-id">
          <Avatar className="w-[10rem] h-[10rem] cursor-pointer relative !overflow-visible">
            <AvatarImage alt="Profile picture" />
            <AvatarFallback className="text-4xl">IH</AvatarFallback>
            <FaCamera className="absolute size-8 z-10 right-5 bottom-0" />
          </Avatar>
        </label>
        <input type="file" className="hidden" id="picture-id" />
        <h1 className="text-3xl font-bold ">Ivan Horvat</h1>
        <hr className="w-[90%]" />
        <label className="div-label">
          <h3 className="div-label-h3">Username</h3>
          <input
            type="text"
            placeholder="...new username"
            className="form-label-input"
            onChange={(e) => setChangeUsername(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="div-label-h3">Password</h3>
          <input
            type="text"
            placeholder="...new username"
            className="form-label-input"
            onChange={(e) => setChangePassword(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="div-label-h3 ">Bio</h3>
          <input
            type="text"
            placeholder="...new bio"
            className="form-label-input"
            onChange={(e) => setChangeBio(e.target.value)}
          />
        </label>
        <hr className="w-[90%]" />
      </div>
      <DialogFooter>
        <DialogClose className="flex justify-between items-center w-full ">
          <button
            className="text-secondary"
            onClick={
              () => push(`/${username}`)
              //I had to do it like this because modal won't close on imported Link component from next.js
            }
          >
            Public profile
          </button>
          <Button>Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ChangeProfileModal;
