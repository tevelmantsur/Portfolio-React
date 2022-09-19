import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import Typist from "react-typist";

export default function Header() {
  return (
    <Container maxWidth={false} id="start" className="headerContainer">
      <div className="flex" style={{ justifyContent: "space-evenly" }}>
        <Box padding="25px">
          <Typography variant="h1">Hello I'm</Typography>
          <Typography variant="h1" style={{ color: "#ff0053f0" }}>
            Tevel Mantsur
          </Typography>

          <Box m={5}>
          <Typist cursor={{ show: false }}>
            <Typography variant="h6">
              Creative self taught Web developer
            </Typography>
            <Typography variant="h6">
              craving to learn and expand my variety of skills
            </Typography>
          </Typist>
          </Box>
          
        <Box m={5}>
        <Button   size="large" color="primary" variant="contained">CV</Button>
        </Box>
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
          <img
            style={{ height: "100%" }}
            alt="Tevel Mantsur"
            src={require("../images/meme.png")}
          />
        </Box>
      </div>
    </Container>
  );
}
