import React from "react";

const HeaderOfComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl font-semibold">{children}</h1>
        <hr className="bg-border h-[2px] mt-2" />
      </div>
    </>
  );
};

export default HeaderOfComponents;
