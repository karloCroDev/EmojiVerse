import React from "react";
import SignUpImage from "../../assets/sign-up-img.jpg";
import Authentication from "../components/Authentication";

const page = () => {
  return (
    <Authentication
      alt="sign-up-image"
      image={SignUpImage}
      type="sign-up"
      link="/sign-in"
    />
  );
};

export default page;
