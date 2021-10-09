import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={"/"} component={ Home } />
            </Switch>
        </React.Fragment>
    );
};
export default Router;