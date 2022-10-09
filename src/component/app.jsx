import React, { useEffect } from "react";
import Header from "./header.jsx";
import Projects from "./Projects";
import Code from "./code.jsx";
import { Route, Switch } from "react-router-dom";
import Test from "./test.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./footer.jsx";
import NavBar from "./navbar.jsx";
import { ContactUs } from "./ContactUs.jsx";
import { Typography } from "@material-ui/core";
import data from "../data";
import FailToLoad from "./FailToLoad.jsx";

function App() {
  
  function ScrollToTopOnMount() {
    useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
    }, []);

    return null;
  }

  function HomePage() {
    return (
      <div className="App">
        <div className="slide">
          <div className="slide-inner" />
        </div>
        <div>
          <NavBar />
          <Header />
          <div style={{ padding: 60 }}>
            <Typography align="center" variant="h4">
              MY PROJECTS{" "}
            </Typography>
            <hr
              style={{
                width: "150px",
                borderColor: "rgb(255 47 115 / 100%)",
                borderWidth: "5px 0px 0px ",
              }}
            ></hr>
            <br></br> <br></br>
            <Projects />
          </div>
          <Code />
          <ContactUs />
        </div>
        <Footer />
      </div>
    );
  }

  function Page(props) {
   let Check =  data.map((item)=>{
      if(props.location.pathname === `/${item.name}`){
        return true
      }
      return null
    })
    return(Check.includes(true)  ?  <div style={{ position: "absolute" }}>
    <ScrollToTopOnMount />
    <Test />
  </div>  : <>
  <NavBar/> <FailToLoad/></>)
     
  }

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1100} classNames="fade">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path={`${location.pathname}`} component={Page} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
