import React from "react";
import SignInImage from "../../assets/sign-in-img.jpg";
import Authentication from "../components/Authentication";
const page = () => {
  return (
    <Authentication
      alt="sign-in-image"
      image={SignInImage}
      type="sign-in"
      link="/sign-up"
    />
  );
};

export default page;
