import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import About from "./components/About";
import Contenu from "./components/Contenu";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

const Routes = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="App">
          <div className="TopBar">
            <Link to={`/`}>Login</Link>
            <Link to={`/main`}>Main(privé)</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/contenu/1`}>Contenu 1</Link>
            <Link to={`/contenu/2`}>Contenu 2</Link>
          </div>

          <TransitionGroup className="content">
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contenu/:id" component={Contenu} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
);

export default Routes;
