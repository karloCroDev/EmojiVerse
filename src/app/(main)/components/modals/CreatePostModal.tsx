"use client";
import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CreatePostModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create your own mysterious post 🤔❓</DialogTitle>
      </DialogHeader>
      <DialogFooter>
        <Button>Save</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default CreatePostModal;
