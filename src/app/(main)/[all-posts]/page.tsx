import React from "react";
import UserInfo from "./components/UserInfo";
import AllPosts from "./components/AllPosts";
const page = () => {
  return (
    <section className="w-full h-full border-2 rounded-3xl p-7 animate-fade flex flex-col gap-y-4 overflow-scroll">
      <UserInfo />
      <AllPosts />
    </section>
  );
};

export default page;
