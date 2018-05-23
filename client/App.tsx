import * as React from "react";
import {Menu} from "./menu/Menu";
import {Route, Router} from "react-router";
import {Routes} from "./constants/Routes";
import {RouterController} from "./controllers/RouterController";
import {About} from "./about/About";
import {Home} from "./home/Home";

export class App extends React.Component {
  render() {
    return (
      <Router history={RouterController.history}>
        <div>
          <Route path={Routes.home} component={Menu}/>
          <div style={{padding: 10}}>
            <Route exact path={Routes.home} component={Home}/>
            <Route exact path={Routes.about} component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}