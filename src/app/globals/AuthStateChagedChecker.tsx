"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useAuthState } from "./global-auth-store";
import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

const AuthStateChagedChecker = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    setUid,
    setPfp,
    setUsername,
    setBio,
    setFollowers,
    setUser,
    setInitials,
  } = useAuthState((state) => ({
    setUid: state.setUid,
    setPfp: state.setPfp,
    setUsername: state.setUsername,
    setBio: state.setBio,
    setFollowers: state.setFollowers,
    setUser: state.setUser,
    setInitials: state.setInitials,
  }));
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setUid(user.uid);
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username);
          setPfp(data.pfp);
          setBio(data.bio);
          setInitials(data.initials);
          setFollowers(data.followers);
        }
      }
    });

    return () => unsub();
  }, []);

  return children;
};

export default AuthStateChagedChecker;
