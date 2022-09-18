import React from "react";
import { Link } from "react-router-dom";
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
            mobile={ item.mobile}
            Technology={item.Technology}
          />
    
      
    );
  }

  return (
    <div
      id="projects"
      style={{ display: "flex", flexWrap: "wrap" , position:"relative"}}
    >
     
      <div style={{ flex: "33%" }}>
        {data.map((project, index) => {
          if (index % 3 === 0) {
            return Project(project, index);
          }
        })}
      </div>
      <div style={{ flex: "33%" }}>
        {data.map((project, index) => {
          if (index % 3 === 1) {
            return Project(project, index);
          }
        })}
      </div>
      <div style={{ flex: "33%" }}>
        {data.map((project, index) => {
          if (index % 3 === 2) {
            return Project(project, index);
          }
        })}
      </div>
    </div>
  );
}

export default Projects;
