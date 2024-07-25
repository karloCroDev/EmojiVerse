import React from "react";

const HeaderOfComponents = ({ title }: { title: string }) => {
  return (
    <>
      <header className="w-full">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <hr className="bg-border h-[2px] mt-2" />
      </header>
    </>
  );
};

export default HeaderOfComponents;
