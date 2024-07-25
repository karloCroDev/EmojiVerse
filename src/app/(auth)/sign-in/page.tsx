"use client"; //I have to use here use client (it actually doesn't make any difference)
import React from "react";
import SignInImage from "../../assets/sign-in-img.jpg";
import Authentication from "../components/Authentication";

import { auth } from "@/app/firebase/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
const page = () => {
  const signInFunc = async (
    email: string,
    password: string,
    errorToast: () => void
  ) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      errorToast();
    }
  };
  return (
    <Authentication
      alt="sign-in-image"
      image={SignInImage}
      type="sign-in"
      link="/sign-up"
      signInFunc={signInFunc}
    />
  );
};

export default page;
