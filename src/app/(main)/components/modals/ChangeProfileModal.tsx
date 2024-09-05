"use client";
import React, { useMemo, useState } from "react";
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
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/app/firebase/firebase";
import { updatePassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import LinkAsButton from "@/app/(main)/components/Reusables/LinkAsButton";

const ChangeProfileModal = () => {
  const { username, initials, uid, bio, pfp, user } = useAuthState((state) => ({
    username: state.username,
    initials: state.initials,
    uid: state.uid,
    bio: state.bio,
    pfp: state.pfp,
    user: state.user,
  }));

  const [changeUsername, setChangeUsername] = useState("");
  const [changeBio, setChangeBio] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [changePfp, setChangePfp] = useState<any>("");

  const preventUserFromSavingChanges = !(
    changeBio.length > 4 ||
    changePassword.length > 5 ||
    changeUsername.length > 3 ||
    changePfp
  );

  const modifyPfp = async () => {
    if (changePfp) {
      const pfpRef = ref(storage, `pfp/${uid}`);
      await uploadBytes(pfpRef, changePfp);
      await getDownloadURL(pfpRef);
    }
  };

  const modifyProfile = async () => {
    const usernameChecker =
      changeUsername.length > 2 ? changeUsername : username;
    const bioChecker = changeBio.length > 5 ? changeBio : bio;

    await updateDoc(doc(db, "users", uid), {
      username: usernameChecker,
      bio: bioChecker,
      pfp: pfp,
    });
  };
  const modifyPassword = async () => {
    if (changePassword.length > 5) {
      await updatePassword(user, changePassword);
    } else {
      console.log(false);
    }
  };
  //Doing this only on modal, so that only on modal chnages reflec, also it was rendering too much, so I fixed with useMemo()
  const srcImage = useMemo(
    () => (changePfp ? URL.createObjectURL(changePfp) : pfp),
    [changePfp, pfp]
  );

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Your profile</DialogTitle>
      </DialogHeader>
      <hr className="mt-[-4px]" />
      <div className="w-full flex flex-col items-center gap-y-4">
        <label htmlFor="picture-id">
          <Avatar className="w-[10rem] h-[10rem] cursor-pointer relative !overflow-visible">
            <AvatarImage
              alt="Profile picture"
              src={srcImage}
              className="rounded-full"
            />
            <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
            <FaCamera className="absolute size-8 z-10 right-5 bottom-0" />
          </Avatar>
        </label>
        <input
          type="file"
          className="hidden"
          id="picture-id"
          onChange={(e) => {
            if (e.target.files) {
              setChangePfp(e.target.files[0]);
            }
          }}
        />
        <h1 className="text-3xl font-bold ">{username}</h1>
        <hr className="w-[90%]" />
        <label className="div-label">
          <h3 className="label-h3">Username</h3>
          <input
            type="text"
            placeholder="...min 3 charachters"
            className="form-label-input"
            onChange={(e) => setChangeUsername(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="label-h3">Password</h3>
          <input
            type="text"
            placeholder="...min 6 charachters"
            className="form-label-input"
            onChange={(e) => setChangePassword(e.target.value)}
          />
        </label>
        <label className="div-label">
          <h3 className="label-h3 ">Bio</h3>
          <input
            type="text"
            placeholder="...min 5 emojis"
            className="form-label-input"
            onChange={(e) => setChangeBio(e.target.value)}
          />
        </label>
        <hr className="w-[90%]" />
      </div>

      <DialogFooter>
        <div className="flex justify-between items-center w-full ">
          <DialogClose>
            <LinkAsButton className="text-secondary" location={uid}>
              Public profile
            </LinkAsButton>
          </DialogClose>
          <DialogClose
            disabled={preventUserFromSavingChanges}
            className="disabled:cursor-not-allowed"
          >
            <Button
              className="p-4 text-lg disabled:cursor-not-allowed"
              disabled={preventUserFromSavingChanges}
              onClick={async () => {
                await modifyPfp();
                await modifyPassword();
                await modifyProfile();
                window.location.reload();
              }}
            >
              Save changes
            </Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default ChangeProfileModal;
