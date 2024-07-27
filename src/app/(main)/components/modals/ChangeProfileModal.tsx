"use client";
import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
const ChangeProfileModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Your profile</DialogTitle>
      </DialogHeader>
      <div className="w-full flex flex-col items-center border">
        <Avatar className="w-[10rem] h-[10rem]">
          <AvatarImage alt="Profile picture" />
          <AvatarFallback className="text-4xl">IH</AvatarFallback>
        </Avatar>
      </div>
      <DialogFooter className="flex !justify-between w-full">
        <button className="text-secondary">Public profile</button>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ChangeProfileModal;
