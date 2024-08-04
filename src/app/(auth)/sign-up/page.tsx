"use client";
import React from "react";
import SignUpImage from "../../assets/sign-up-img.jpg";
import Authentication from "../components/Authentication";
import { auth, db } from "@/app/firebase/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const page = () => {
  const signUpFunc = async (
    username: string,
    email: string,
    password: string,
    errorToastFunc: () => void
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser?.uid!), {
        imgUrl: "",
        username: username,
      });
    } catch (error) {
      console.error(error);
      errorToastFunc();
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
