import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-10rem)] mt-4 sm:mt-0 px-6 sm:px-12 2xl:px-24 grid grid-cols-10 grid-rows-2  md:gap-4 2xl:gap-8 ">
        <div className="col-start-1 md:col-end-4  2xl:col-end-3 w-full">
          <Sidebar />
        </div>
        <div className="sm:mt-0 col-start-1 lg:col-start-4 2xl:col-start-3 -col-end-1 row-start-1 row-end-3 w-full">
          {children}
        </div>
      </main>
    </>
  );
};

export default layout;
