"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useAuthState } from "./global-auth-store";
import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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

  const pathname = usePathname();
  const { push } = useRouter();
  const { toast } = useToast();

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

      if (!user && !pathname.includes("/sign")) {
        push("/sign-in");
        toast({
          title: "Uh oh 🥺! You are not signed in. ",
          description: "Please sign in or create an account",
        });
      }
    });

    return () => unsub();
  }, []);

  return children;
};

export default AuthStateChagedChecker;
