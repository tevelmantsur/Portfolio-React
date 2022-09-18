import React, { useState, useEffect } from "react";
import { debounce } from "./helper";

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
  };

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-70px" }}>
      <div
        className="navBar"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "fixed",
          width: "100%",
        }}
      >
       <div>

       <img    style={{ height: "70px", padding: "0 20px" }}
                alt="Forward Arrow"
                src={require("../images/icons/LOGO.png")} />
       </div>
        <ul className="navbar-links" >
          <li onClick={() => window.location.replace("/#start")}>Start</li>
          <li onClick={() => window.location.replace("/#projects")}>
            Projects
          </li>
          <li onClick={() => window.location.replace("/#about")}>About</li>
          <li onClick={() => window.location.replace("/#contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
