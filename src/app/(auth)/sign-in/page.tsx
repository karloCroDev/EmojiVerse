"use client";
import React from "react";
import SignInImage from "@/app/assets/sign-in-img.jpg";
import Authentication from "@/app/(auth)/components/Authentication";
import { useRouter } from "next/navigation";
import { useLoadingState } from "../loading-store";
import { auth } from "@/app/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const page = () => {
  const setAuthProcess = useLoadingState((state) => state.setAuthProcess);
  const { push } = useRouter();
  const signInFunc = async (
    email: string,
    password: string,
    errorToast: () => void
  ) => {
    try {
      setAuthProcess(true);
      await signInWithEmailAndPassword(auth, email, password);
      push("/main-page");
    } catch (error) {
      console.error(error);
      errorToast();
    } finally {
      setAuthProcess(false);
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
