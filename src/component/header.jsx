import React from "react";
import Typist from "react-typist";

export default function Header() {
  return (
    <div id="start" className="headerContainer">
      <div
        className="flex"
        style={{ justifyContent: "space-evenly" }}
      >
        <div>
          <h1 className="header-text">
            Hello I'm 
            <span style={{ color: "#ff0053f0" }}> Tevel Mantsur</span>
          </h1>
          <Typist  cursor={{show:false}} >
            <h2>Creative self taught Web developer</h2>
            <h2>craving to learn and expand my variety of skills</h2>
           
          </Typist>
          <button style={{marginBottom:"55px"}}>CV</button>
        </div>
        <div
          style={{
            height: "60vh",
            display: "flex",
            alignItems: "flex-end",
            backgroundImage: `url(${require("../images/web.jpg")})`,
            backgroundColor: "#ff46469e",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            borderRadius: "100px 350px 350px 100px",
          }}
        >
          <img style={{ height: "100%" }} alt="Tevel Mantsur" src={require("../images/meme.png")} />
        </div>
      </div>
    </div>
  );
}
