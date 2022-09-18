import React from "react";

function Footer(props) {
  return (
    <div id="contact">
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div>
  
          <ul className="footer-links">
            <li>
              <img
                style={{ width: "30px", padding: "0 20px" }}
                alt="Forward Arrow"
                src={require("../images/SVG/linkedin.svg")}
              ></img>
            </li>
            <li>
              <img
                style={{ width: "30px", padding: "0 20px" }}
                alt="Forward Arrow"
                src={require("../images/SVG/github.svg")}
              ></img>
            </li>
            <li>
              <img
                style={{ width: "30px", padding: "0 20px" }}
                alt="Forward Arrow"
                src={require("../images/SVG/twitter.svg")}
              ></img>
            </li>
          </ul>
        </div>{" "}
      </div>
      <h5 style={{ textAlign: "center" }}>All right deserved@ TevelMantsur</h5>
    </div>
  );
}

export default Footer;
