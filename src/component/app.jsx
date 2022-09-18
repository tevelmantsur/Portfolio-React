import React, { useEffect } from "react";
import Header from "./header.jsx";
import Projects from "./Projects";
import Code from "./code.jsx";
import { Route, Switch } from "react-router-dom";
import Test from "./test.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./footer.jsx";
import NavBar from "./navbar.jsx";
import About from "./about";
import { ContactUs } from "./ContactUs.jsx";

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
          <div className="slide-inner"/>
        </div>
        <div>

        <NavBar />
        <Header />
        <div style={{ padding: 60  }}>
        <h1 style={{fontSize:"2.5rem"}}>MY PROJECTS </h1>
        <hr style={{width:"150px", borderColor:"rgb(255 47 115 / 100%)" , borderWidth:"5px 0px 0px " }}></hr>
        <br></br> <br></br>
        <Projects />
      </div>
     
      <Code />
     
      <ContactUs/>
        </div>
       

        <Footer />
      </div>
    );
  }

  function Page() {
    return (
      <div style={{ position: "absolute" }}>
        <ScrollToTopOnMount />
        <Test />
      </div>
    );
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