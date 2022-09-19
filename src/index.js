import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./component/app";
import "./style.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createTheme({
  typography: {
    fontFamily: "monospace",
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,

  document.getElementById("root")
);
