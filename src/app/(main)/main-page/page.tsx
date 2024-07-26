import React from "react";
import HeaderOfComponents from "../components/HeaderOfComponents";
import Filters from "./components/Filters";
import Posts from "./components/Posts";
const page = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className="border-2 rounded-3xl h-[14rem] p-7 flex flex-col">
        <HeaderOfComponents title="Filters" />
        <Filters />
      </div>
      <div className="border-2 rounded-3xl flex-1 p-7 overflow-scroll">
        <HeaderOfComponents title="Posts" />
        <Posts
          bio="😑😑😑😑😑😑"
          content="🤪😑🤡😉😊👉⚙️👏🤞😎😎😀😑🤪😊😊⚙️😀🤞🤞👏⚙️"
          pfp=""
          username="Ana Horvat"
        />
      </div>
    </div>
  );
};

export default page;
