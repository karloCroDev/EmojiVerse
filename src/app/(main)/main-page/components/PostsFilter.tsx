"use client";

import React from "react";
import Posts from "../../components/Reusables/Posts";
import { useFilterStore } from "./filter-store";
import { useAuthState } from "@/app/globals/global-auth-store";
const PostsFilter = ({ posts }: { posts: any[] }) => {
  const { filterInput, filterSelect } = useFilterStore((state) => ({
    filterInput: state.filterInput,
    filterSelect: state.filterSelect,
  }));
  const randomSelection = 1 - Math.random();

  const uid = useAuthState((state) => state.uid);

  return (
    <>
      {posts
        .filter(
          (post) => filterSelect !== "following" || post.followers.includes(uid)
        )
        .filter(
          (post) =>
            post.username.includes(filterInput) ||
            post.content.includes(filterInput)
        )
        .sort((a, b) => {
          switch (filterSelect) {
            case "popular":
            case "following":
              return b.followers.length - a.followers.length;
            case "recommended":
              randomSelection;
            default:
              return randomSelection;
          }
        })
        .map((post) => (
          <Posts
            key={post.id}
            bio={post.bio}
            content={post.content}
            pfp={post.pfp}
            username={post.username}
            docId={post.id}
            followers={post.followers}
            likes={post.likes}
          />
        ))}
    </>
  );
};

export default PostsFilter;
