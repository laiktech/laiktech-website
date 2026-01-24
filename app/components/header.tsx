"use client";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { NavBar } from "./nav-bar";
import { MainSection } from "./banner";

export const Header = () => {
  const ref = useRef(null);
  const [ isMainBannerVisible, setMainBannerVisible ] = useState(true);
  
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setMainBannerVisible(entry.isIntersecting);
    }, { threshold: 0.4 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box className="header">
      <NavBar isMainBannerVisible={ isMainBannerVisible } />
      <MainSection ref={ ref } />
    </Box>
  );
};
