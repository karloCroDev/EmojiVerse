"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthState } from "./global-auth-store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthStateChagedChecker = () => {
  const { push } = useRouter();
  const { setUid, uid, pfp, setPfp, setUsername, username } = useAuthState(
    (state) => state
  );
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        console.log(user);
        setUsername(user.displayName || "");
        setPfp(user.photoURL || "");
        push("/main-page");
      } else {
      }
    });

    return () => unsub();
  }, []);

  console.log(uid);
  console.log(username);
  return null;
};

export default AuthStateChagedChecker;
