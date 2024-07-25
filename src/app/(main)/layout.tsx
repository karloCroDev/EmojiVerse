import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-8rem)] w-full px-24 grid grid-cols-5 grid-rows-2  gap-8 pb-8">
        <Sidebar />
        <section className="col-start-2 col-end-6 row-start-1 row-end-3 border-2 rounded-3xl p-7">
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
