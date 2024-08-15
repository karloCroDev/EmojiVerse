import React from "react";
import HeaderOfComponents from "../components/Reusables/HeaderOfComponents";
import Filters from "./components/Filters";
import Posts from "../components/Reusables/Posts";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import PostsFilter from "./components/PostsFilter";

const getPosts = async (): Promise<any[]> => {
  const postsSnapshot = await getDocs(collection(db, "posts"));

  const posts: any[] = await Promise.all(
    postsSnapshot.docs.map(async (docx) => {
      const userSnapshot = await getDoc(doc(db, "users", docx.data().authorId));
      return {
        ...docx.data(),
        id: docx.id,
        ...userSnapshot.data(),
      };
    })
  );

  return posts;
};
const page = async () => {
  const posts = await getPosts();
  return (
    <section className="h-full w-full flex flex-col gap-6 animate-fade">
      <div className="border-2 rounded-3xl h-[14rem] p-7 flex flex-col">
        <HeaderOfComponents title="Filters" />
        <Filters />
      </div>
      <div className="border-2 rounded-3xl flex-1 p-7 overflow-scroll">
        <HeaderOfComponents title="Posts" />
        <PostsFilter posts={posts} />
      </div>
    </section>
  );
};

export default page;
