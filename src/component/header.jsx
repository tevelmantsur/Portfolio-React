import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Typist from "react-typist";

export default function Header() {
  return (
    <Container maxWidth={false} id="start" className="headerContainer">
      <div
        className="flex"
        style={{ justifyContent: "space-evenly" }}
      >
        <Box padding="25px">
          <Typography variant="h1" >
            Hello I'm 
            <br></br>
            <span style={{ color: "#ff0053f0" }}> Tevel Mantsur</span>
          </Typography>
          <Typist  cursor={{show:false}} >
            <h2>Creative self taught Web developer</h2>
            <h2>craving to learn and expand my variety of skills</h2>
           
          </Typist>
          <button style={{marginBottom:"55px"}}>CV</button>
        </Box>
        <Box
          style={{
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
        </Box>
      </div>
    </Container>
  );
}
