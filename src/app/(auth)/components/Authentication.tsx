"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useGlobalStore } from "@/app/global-store";
import { useToast } from "@/components/ui/use-toast";
//Firebase-imports

import { auth, db } from "@/app/firebase/firebase";

//Component

interface AuthenticationProps {
  image: any | string;
  alt: string;
  type: "sign-in" | "sign-up";
  link: "/sign-in" | "/sign-up";
  signUpFunc?: (
    email: string,
    password: string,
    username: string,
    errorToastFunc: () => void
  ) => void;
  signInFunc?: (
    email: string,
    password: string,
    errorToastFunc: () => void
  ) => void;
}

const Authentication = ({
  image,
  alt,
  type,
  link,
  signInFunc,
  signUpFunc,
}: AuthenticationProps) => {
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
  const { toast } = useToast();
  const errorToast = useGlobalStore((state) => state.errorToast);
  const errorToastFunc = () => {
    errorToast(toast);
  };

  return (
    <>
      <div
        className={`w-10/12 animate-fade flex sm:flex-row flex-col sm:gap-x-10 sm:p-8 p-10 py-20  sm:rounded-2xl rounded-3xl  border-2 aspect-video sm:aspect-[4/3] ${
          checkerSignIn
            ? "sm:w-[50rem] "
            : "sm:w-[55rem] sm:flex-row-reverse opacity-1"
        }  `}
      >
        <div className="flex-1 hidden sm:flex">
          <Image src={image} alt={alt} className="object-cover rounded-md" />
        </div>

        <div className="sm:w-[45%]  flex flex-col gap-10 justify-center">
          <h1 className="font-bold text-5xl">{page}</h1>
          <form
            className="w-full flex flex-col sm:gap-y-3 gap-y-6 "
            onSubmit={(e) => {
              e.preventDefault();
              signUpFunc !== undefined &&
                signUpFunc(username, email, password, errorToastFunc);
              signInFunc !== undefined &&
                signInFunc(email, password, errorToastFunc);
            }}
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
            <Button className="bg-primary text-background font-semibold text-3xl w-full h-20 sm:h-16 sm:rounded rounded-lg active:scale-95  mt-5 ">
              {page}
            </Button>
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
