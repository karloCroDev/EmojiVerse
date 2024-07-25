import React from "react";

const HeaderOfComponents = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Who to follow</h1>
      <hr className="bg-border h-[2px] mt-2" />
    </>
  );
};

export default HeaderOfComponents;
