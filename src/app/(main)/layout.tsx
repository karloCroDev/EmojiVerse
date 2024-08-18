import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-10rem)] mt-4 sm:mt-0 px-4 sm:px-24 grid grid-cols-5 grid-rows-2 gap-8 pb-8">
        <Sidebar />
        <div className="sm:mt-0 col-start-1 sm:col-start-2 col-end-6 row-start-1 row-end-3  w-full">
          {children}
        </div>
      </main>
    </>
  );
};

export default layout;
