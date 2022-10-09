import {  Container, Typography } from "@material-ui/core";
import React from "react";

function FailToLoad() {
  return (
    <Container style={{ textAlign: "center" ,   paddingTop: "120px"
  }}>
          <Typography   variant="h2" >
    404 Page
      </Typography>     <Typography   variant="h4" >
Opss...Failed To load this URL 

      </Typography>
      <br></br>
    <a href="/">
    <button>Home Page</button>
    </a>
    </Container>
  
  );
}

export default FailToLoad;
