import React from "react";
import {  useHistory } from "react-router-dom";

import ImagePage from "./page-image";

function ProjectDetails(props) {
  let history = useHistory();

  console.log(props.Technology);



  return (
    <div className="project-page">
      <div id="pot" className="project-page-details">
      <div style={{textAlign:"right"}} >
      <button  onClick={history.goBack}>
          X
        </button>
      </div>
        <div  style={{ textAlign: "center" , margin:"25% 0px" , padding:"0px 5%" }}>
          <h1>{props.name}</h1>
          <h3>{props.details}</h3>
<div style={{display:"flex" , justifyContent:"center"}}>
{props.Link ?  <button onClick={()=>{window.open(props.Link)}}>Visit </button>:  <h2 style={{backgroundColor:"gray"}}> Not Avilable</h2> }
   {props.Git ?  <img
   onClick={()=>{window.open(props.Git)}}
                style={{ height: "40px", margin: "0 20px" , cursor:"pointer" }}
                alt="Forward Arrow"
                src={require("../images/SVG/github.svg")}
              ></img> : null}       

</div>
<h2>Technologys</h2>
<div>
{  props.Technology.map((Tech)=>{
    return  <img
    
    style={{ height: "40px" , margin: "6px" }}
    alt="Forward Arrow"
    src={require(`../images/icons/${Tech}.png`)}
  ></img>
  })}
</div>

          <div >
 
         </div>
        </div>
      </div>
      <div className="project-page-image">
        <div className="scroll">
          <ImagePage image={props.backgroundImg} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
