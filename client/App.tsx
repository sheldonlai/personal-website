import * as React from "react";
import {Menu} from "./menu/Menu";
import {Route} from "react-router";
import {Routes} from "./constants/Routes";
import {About} from "./about/About";
import {Home} from "./home/Home";
import {HashRouter} from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path={Routes.home} component={Menu}/>
          <div style={{padding: 10}}>
            <Route exact path={Routes.home} component={Home}/>
            <Route exact path={Routes.about} component={About}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}