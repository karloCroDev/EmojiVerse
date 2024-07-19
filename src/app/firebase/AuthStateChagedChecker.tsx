"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthStore } from "../global-store";
import React, { useEffect } from "react";

const AuthStateChagedChecker = () => {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
      }
    });

    return () => unsub();
  }, []);

  const { setUid, uid } = useAuthStore((state) => state);

  return null;
};

export default AuthStateChagedChecker;
