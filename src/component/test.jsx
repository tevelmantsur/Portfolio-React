import React from "react";
import { Route } from "react-router-dom";
import data from "../data";
import ProjectDetails from "./projectsDetail";

function Test() {
  function test(item) {
    return (
      <div key={item.id}>
        <Route path={`/${item.name}`}>
          <ProjectDetails
            id={item.id}
            name={item.name}
            details={item.details}
            backgroundImg={item.backgroundImg}
            Technology={item.Technology}
            Link={item.Link}
            Git={item.Git}
          />
        </Route>
      </div>
    );
  }

  return data.map(test);
}

export default Test;
