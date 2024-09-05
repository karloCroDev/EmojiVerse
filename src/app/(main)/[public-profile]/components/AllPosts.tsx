import React from "react";
import Posts from "@/app/(main)/components/Reusables/Posts";

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
          initials={user.initials}
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
