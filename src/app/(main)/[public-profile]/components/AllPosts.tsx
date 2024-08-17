import React from "react";
import HeaderOfComponents from "../../components/Reusables/HeaderOfComponents";
import Posts from "../../components/Reusables/Posts";
import { useAuthState } from "@/app/globals/global-auth-store";

const AllPosts = async ({ posts }: { posts: any }) => {
  return (
    <>
      <HeaderOfComponents>All posts</HeaderOfComponents>
    </>
  );
};

export default AllPosts;
