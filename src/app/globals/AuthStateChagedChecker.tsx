"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthStore } from "./global-store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthStateChagedChecker = () => {
  const { push } = useRouter();
  const { setUid, uid } = useAuthStore((state) => state);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        push("/main-page");
      } else {
      }
    });

    return () => unsub();
  }, []);

  console.log(uid);
  return null;
};

export default AuthStateChagedChecker;
