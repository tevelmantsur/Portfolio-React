import { Grid } from "@material-ui/core";
import React from "react";
import data from "../data";
import Proj from "./proj";
function Projects(props) {
  function Project(item, index) {
    return (
      <Proj
        key={item.id}
        id={item.id}
        name={item.name}
        details={item.details}
        b={item.backgroundImg}
        mobile={item.mobile}
        Technology={item.Technology}
      />
    );
  }

  return (
    <Grid
      container
      spacing={8}
      id="projects"
      //  style={{ display: "flex", flexWrap: "wrap" , position:"relative"}}
    >
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        {data.map((project, index) => {
          if (index % 3 === 0) {
            return Project(project, index);
          } else {
            return null;
          }
        })}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        {data.map((project, index) => {
          if (index % 3 === 1) {
            return Project(project, index);
          } else {
            return null;
          }
        })}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        {data.map((project, index) => {
          if (index % 3 === 2) {
            return Project(project, index);
          } else {
            return null;
          }
        })}
      </Grid>
    </Grid>
  );
}

export default Projects;
