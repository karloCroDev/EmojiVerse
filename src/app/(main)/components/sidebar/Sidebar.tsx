"use client";
import React, { useEffect, useState } from "react";
import ProfileBar from "./ProfileBar";
import WhoToFollow from "./WhoToFollow";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  //Both components are client so no
  const [isMounted, setIsMounted] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  //I will get error if I don't do this
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isBigScreen)
    return (
      <>
        <ProfileBar />
        <WhoToFollow />
      </>
    );
};

export default Sidebar;
