import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./router/home";
import About from "./router/about";
import People from "./router/people";
import Person from "./router/person";
import Navbar from "./router/nav";

const ReactRouter = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/people">
                        <People />
                    </Route>
                    <Route path="*">
                        <Person />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

ReactRouter.propTypes = {};

export default ReactRouter;
