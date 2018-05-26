import * as React from "react";
import {menuButtonStyle} from "./MenuButtonStyles";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Button from "@material-ui/core/Button/Button";
import {MenuButton} from "./types/MenuButton";
import {CSSTransition} from "react-transition-group";

interface props {
  openMenu: () => void;
  collapsed: boolean;
  buttons: MenuButton[]
  handleMenuClick: (route: string) => void;
}

export class SmallMenu extends React.Component<props> {
  render() {
    return (
      <div>
        <Toolbar>
          <IconButton color="inherit"
                      aria-label="Menu"
                      onClick={this.props.openMenu}
          >
            <Icon>menu</Icon>
          </IconButton>

          <Button type="title" color="inherit"
                  style={{
                    textAlign: 'center', ...menuButtonStyle,
                    fontSize: 20
                  }}>
            Sheldon's Profile
          </Button>


        </Toolbar>
        <CSSTransition
          in={!this.props.collapsed}
          timeout={150}
          unmountOnExit
          classNames="menu">
          {()=> (
            <div>
              {this.props.buttons.map((button: MenuButton, index) => button.toLinkTag(index, true))}
            </div>
          )}
        </CSSTransition>
      </div>
    )
  }
}