"use client";
import React from "react";
import SignUpImage from "../../assets/sign-up-img.jpg";
import Authentication from "../components/Authentication";
import { auth, db } from "@/app/firebase/firebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useLoadingState } from "../loading-store";

const page = () => {
  const setAuthProcess = useLoadingState((state) => state.setAuthProcess);

  const signUpFunc = async (
    username: string,
    email: string,
    password: string,
    errorToastFunc: () => void
  ) => {
    try {
      setAuthProcess(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCredential.user.uid!), {
        username: username,
        imgUrl: "",
        bio: "",
        followers: [],
        messgaes: [],
      });

      setAuthProcess(false);
    } catch (error) {
      console.error(error);
      errorToastFunc();
      setAuthProcess(false);
    }
  };
  return (
    <Authentication
      alt="sign-up-image"
      image={SignUpImage}
      type="sign-up"
      link="/sign-in"
      signUpFunc={signUpFunc}
    />
  );
};

export default page;
