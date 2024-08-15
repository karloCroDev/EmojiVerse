import React from "react";
import HeaderOfComponents from "../components/Reusables/HeaderOfComponents";
import Filters from "./components/Filters";
import Posts from "../components/Reusables/Posts";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";

const getPosts = async (): Promise<any[]> => {
  const postsSnapshot = await getDocs(collection(db, "posts"));

  const posts: any[] = await Promise.all(
    postsSnapshot.docs.map(async (docx) => {
      const userSnapshot = await getDoc(doc(db, "users", docx.data().authorId));
      return {
        ...docx.data(),
        ...userSnapshot.data(),
      };
    })
  );

  return posts;
};
const page = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className="h-full w-full flex flex-col gap-6 animate-fade">
      <div className="border-2 rounded-3xl h-[14rem] p-7 flex flex-col">
        <HeaderOfComponents title="Filters" />
        <Filters />
      </div>
      <div className="border-2 rounded-3xl flex-1 p-7 overflow-scroll">
        <HeaderOfComponents title="Posts" />
        {posts.map((post) => (
          <Posts
            bio={post.bio}
            content={post.content}
            pfp={post.pfp}
            username={post.username}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
