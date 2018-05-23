import * as React from "react";
import {Menu} from "./menu/Menu";
import {Route, Router} from "react-router";
import {Routes} from "./constants/Routes";
import {RouterController} from "./controllers/RouterController";
import {About} from "./about/About";

export class App extends React.Component{
    render() {
        return (
            <div>

                <Router history={RouterController.history}>
                  <div>
                    <Route path={Routes.home} component={Menu}/>
                    <Route exact path={Routes.about} component={About} />
                  </div>
                </Router>
            </div>
        )
    }
}