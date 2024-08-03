"use client";
import React, { useState } from "react";
import HeaderOfComponents from "../Reusables/HeaderOfComponents";
import RecommendedFollowers from "./RecommendedFollowers";
const WhoToFollow = () => {
  const [display, setDsiplay] = useState<boolean>(false);
  return (
    <aside className="border-2 rounded-3xl p-8  flex-col items-start gap-y-6 animate-fade hidden sm:flex">
      <HeaderOfComponents title="Who to follow" />
      <div
        className={`flex flex-col gap-y-4 flex-1 ${
          display ? "overflow-scroll" : "overflow-hidden"
        } w-full`}
      >
        {"adsfasasddf".split("").map((x) => (
          <RecommendedFollowers />
        ))}
      </div>
      {!display ? (
        <button
          className="font-semibold text-lg text-secondary cursor-pointer"
          onClick={() => setDsiplay(true)}
        >
          Show more
        </button>
      ) : null}
    </aside>
  );
};

export default WhoToFollow;
