import React, { ReactSVGElement } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<"svg">) => {
  return (
    <AiOutlineLoading3Quarters
      {...rest}
      className={twMerge("animate-spin", className)}
    />
  );
};

export default Spinner;
