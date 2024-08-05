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

import { useAuthState } from "@/app/globals/global-auth-store";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase/firebase";
import { updatePassword } from "firebase/auth";

const ChangeProfileModal = () => {
  const { push } = useRouter();
  const { username, initials, uid, bio, pfp } = useAuthState((state) => ({
    username: state.username,
    initials: state.initials,
    uid: state.uid,
    bio: state.bio,
    pfp: state.pfp,
  }));
  const [changeUsername, setChangeUsername] = useState("");
  const [changeBio, setChangeBio] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [changePfp, setChangePfp] = useState("");

  console.log(changePfp);

  const modifyProfile = async () => {
    if (changeUsername.length > 2 || changeBio.length > 2) {
      //To reduce calls
      await updateDoc(doc(db, "users", uid), {
        username: changeUsername.length > 2 ? changeUsername : username,
        bio: changeBio.length > 2 && changeBio.length < 7 ? changeBio : bio,
        // pfp: changePfp || pfp,
      });
    } else {
      //make toast over here
    }
  };

  const modifyPassword = async () => {
    if (changePassword.length > 5) {
      await updatePassword(auth.currentUser!, changePassword);
      //Make toast
    } else {
      //Make toast
    }
  };

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
            <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
            <FaCamera className="absolute size-8 z-10 right-5 bottom-0" />
          </Avatar>
        </label>
        <input
          type="file"
          className="hidden"
          id="picture-id"
          onChange={(e) => setChangePfp(e.target.value)}
        />
        <h1 className="text-3xl font-bold ">{username}</h1>
        <hr className="w-[90%]" />
        <label className="div-label">
          <h3 className="label-h3">Username</h3>
          <input
            type="text"
            placeholder="...new username"
            className="form-label-input"
            onChange={(e) => setChangeUsername(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="label-h3">Password</h3>
          <input
            type="text"
            placeholder="...new password"
            className="form-label-input"
            onChange={(e) => setChangePassword(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="label-h3 ">Bio</h3>
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
          <Button
            className="p-4 text-lg"
            onClick={async () => {
              await modifyPassword();
              await modifyProfile();
            }}
          >
            Save changes
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ChangeProfileModal;
