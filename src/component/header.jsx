import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import Typist from "react-typist";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
export default function Header() {
  return (
    <Container maxWidth={false} id="start" className="headerContainer ">
      <div className="flex" style={{ justifyContent: "space-evenly" }}>
        <Box padding="25px">
          <Box mb={1}>
            <Typography className="header-text" variant="h2">
              Hello I'm
            </Typography>
            <Typography
              className="header-text"
              variant="h1"
              style={{ color: "#ff0053f0" }}
            >
              Tevel Mantsur
            </Typography>
          </Box>
          <Box mb={5}>
            <Typist cursor={{ show: false }}>
              <Typography variant="h6">
                CREATIVE SELF TAUGHT WEB DEVELOPER
              </Typography>
              <Typography variant="h6">
                CRAVING TO LEARN AND EXPAND MY VARIETY OF SKILLS
              </Typography>
            </Typist>
          </Box>

          <Box className="flex">
            <button style={{ marginRight: "12px" }}>CV</button>
            <IconButton href="https://github.com/tevelmantsur">
              <GitHubIcon style={{ color: "white" }} fontSize="large" />
            </IconButton>

            <IconButton href="https://www.linkedin.com/in/tevel-mantsur/">
              <LinkedInIcon
                style={{ color: "#0077B5", fontSize: "3rem" }}
                fontSize="large"
              />
            </IconButton>
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
