"use client";
import React, { useMemo, useState } from "react";
import { auth, db } from "@/app/firebase/firebase";
import Image from "next/image";
import Link from "next/link";

//Firebase-imports

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { useAuthStore } from "@/app/global-store";

//Component

interface AuthenticationProps {
  image: any | string;
  alt: string;
  type: "sign-in" | "sign-up";
  link: "/sign-in" | "/sign-up";
}

const Authentication = ({ image, alt, type, link }: AuthenticationProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkerSignIn = type === "sign-in";

  const linkCaseSesitive = useMemo(
    () =>
      link
        .slice(1)
        .split("-")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" "),
    []
  );
  const page = useMemo(
    () =>
      type
        .split("-")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" "),
    []
  );

  //Firebase-part-of-code

  const signUpFunc = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser?.uid!), {
        imgUrl: "",
        username: username,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const signInFunc = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signOutFunc = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  // signOutFunc();
  //
  return (
    <>
      <div
        className={`animate-fade flex  gap-x-10 p-8 rounded-2xl border-2  aspect-[4/3] ${
          checkerSignIn ? "w-[800px] " : "w-[1000px] flex-row-reverse opacity-1"
        }  `}
      >
        <div className="flex-1 flex">
          <Image src={image} alt={alt} className="object-cover rounded-md" />
        </div>

        <div className="w-[45%] flex flex-col gap-10 justify-center ">
          <h1 className="font-bold text-5xl">{page}</h1>
          <form
            className="w-full flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {!checkerSignIn ? (
              <label className="form-label">
                Username:
                <input
                  type="text"
                  className="form-label-input"
                  placeholder="...username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            ) : null}
            <label className="form-label">
              Email:
              <input
                type="email"
                className="form-label-input"
                placeholder="...email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              Password:
              <input
                type="password"
                className="form-label-input"
                placeholder="...password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button
              className="form-sign-button mt-5"
              onClick={() => (type === "sign-up" ? signUpFunc() : signInFunc())}
            >
              {page}
            </button>
            <p className="text-secondary text-sm">
              {type === "sign-up"
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <Link href={link} className="form-sign-link">
                {linkCaseSesitive}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
