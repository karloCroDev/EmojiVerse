"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useAuthState } from "./global-auth-store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

const AuthStateChagedChecker = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { push } = useRouter();
  const { setUid, setPfp, setUsername } = useAuthState((state) => ({
    setUid: state.setUid,
    setPfp: state.setPfp,
    setUsername: state.setUsername,
  }));
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);

        const docSnap = await getDoc(doc(db, "users", user.uid));
        console.log(docSnap);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username);
          setPfp(data.imgUrl);
        }
        push("/main-page");
      }
    });

    return () => unsub();
  }, []);

  return children;
};

export default AuthStateChagedChecker;
