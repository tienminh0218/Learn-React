import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import SingleProp from "./singleProp";
import Error from "./error";
import { Container } from "@material-ui/core";
import { FC } from "react";

const RouterComp: FC = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/singleProp/:id">
                            <SingleProp />
                        </Route>
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </>
    );
};

export default RouterComp;
