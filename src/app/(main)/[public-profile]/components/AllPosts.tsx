import React from "react";
import HeaderOfComponents from "../../components/Reusables/HeaderOfComponents";
import Posts from "../../components/Reusables/Posts";
import { useAuthState } from "@/app/globals/global-auth-store";

const AllPosts = async ({ posts, user }: { posts: any; user: any }) => {
  return (
    <>
      {posts.map((post: any) => (
        <Posts
          key={post.id}
          bio={user.bio}
          content={post.content}
          pfp={user.pfp}
          username={user.username}
          docId={post.id}
          followers={user.followers}
          likes={post.likes}
          comments={post.comments}
          uid={post.authorId}
        />
      ))}
    </>
  );
};

export default AllPosts;
