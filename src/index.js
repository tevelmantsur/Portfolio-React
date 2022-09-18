import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./component/app";
import "./style.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
