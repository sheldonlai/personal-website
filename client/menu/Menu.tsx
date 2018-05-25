import * as React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import {Routes} from "../constants/Routes";
import {RouteComponentProps} from "react-router";
import {LargeMenu} from "./LargeMenu";
import {SmallMenu} from "./SmallMenu";
import {MenuButton} from "./types/MenuButton";

class state {
  open: boolean;
  width: number;
  collapsed: boolean;
  dialogOpen: boolean;
}

export interface props extends RouteComponentProps<{}> {

}

const menuButtons = [
  new MenuButton(Routes.home, "Home"),
  new MenuButton(Routes.about, "About"),
];

export class Menu extends React.Component<props> {
  state = {
    open: false,
    width: 0,
    collapsed: true,
    dialogOpen: false
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  getColor = () => {
    let pathName = this.props.location.pathname;
    if (pathName === Routes.home) {
      return "#FF6526";
    } else if (pathName.indexOf(Routes.about) !== -1) {
      return "#4663f8";
    } else {
      return "#37474F";
    }

  };

  handleMenuClick = (key: string) => {
    switch (key) {
      default:
        this.props.history.push(key);
        break;
    }
    this.setState({open: false});
  };


  openMenu = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth});
  };

  render() {
    const smallScreen = this.state.width <= 650;
    return (
      <div style={{height: 56}}>
        <AppBar position="fixed" style={{backgroundColor: this.getColor()}}>
          {!smallScreen ?
            <LargeMenu
              handleRequestClose={this.handleRequestClose}
              handleMenuClick={this.handleMenuClick}
              openMenu={() => this.setState({open: true})}
              open={this.state.open}
              buttons={menuButtons}/> :
            <SmallMenu openMenu={this.openMenu}
                       collapsed={this.state.collapsed}
                       buttons={menuButtons}
                       handleMenuClick={this.handleMenuClick}/>
          }
        </AppBar>
      </div>
    )
  }
}