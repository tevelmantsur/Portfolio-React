import { AppBar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { debounce } from "./helper";
import ResponsiveAppBar from "./Responsive-menu";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    backgroundColor: "#00000021",
    transition: "top 0.6s",
    zIndex: "99",
    textAlign: "center",
    width:"100%"
  };

  return (
    <AppBar  className="navBar" style={{ ...navbarStyles, top: visible ? "0" : "-70px" }}>
      <ResponsiveAppBar/>
    </AppBar>
  );
};

export default Navbar;
