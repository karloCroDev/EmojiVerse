"use client";
import React, { useMemo, useState } from "react";
import { auth } from "@/app/firebase/firebase";
import Image from "next/image";
import Link from "next/link";
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

  const page = useMemo(
    () =>
      link
        .slice(1)
        .split("-")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" "),
    []
  );
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
                  placeholder="...email"
                  onChange={(e) => setUsername(e.target.value)}
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
              />
            </label>
            <label className="form-label">
              Password:
              <input
                type="password"
                className="form-label-input"
                placeholder="...password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="form-sign-button mt-5 ">Sign up</button>
            <p className="text-secondary text-sm">
              {type === "sign-up"
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <Link href={link} className="form-sign-link">
                {page}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
