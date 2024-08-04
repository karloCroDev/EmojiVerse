"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthState } from "./global-auth-store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthStateChagedChecker = () => {
  const { push } = useRouter();
  const { setUid, uid } = useAuthState((state) => state);
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
