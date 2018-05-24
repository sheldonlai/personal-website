import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import {Routes} from "../constants/Routes";
import Typography from "@material-ui/core/Typography/Typography";
import {menuButtonStyle} from "./MenuButtonStyles";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {CustomLink} from "../components/RoutingComponents/CustomLink";
import {MenuButton} from "./types/MenuButton";


interface props {
  handleRequestClose: () => void;
  handleMenuClick: (route: string) => void;
  openMenu: () => void;
  open: boolean;
  buttons : MenuButton[]
}

export class LargeMenu extends React.Component<props> {

  render() {
    return (
      <Toolbar style={{paddingLeft: 10, paddingRight: 10}}>
        <div style={{flex: 1}}>
          <CustomLink to={Routes.home} style={{color: "#fff"}}>
            <Button color="inherit" style={menuButtonStyle}>
              <Typography variant="title" color="inherit">
                Sheldon's Profile
              </Typography>
            </Button>
          </CustomLink>

        </div>
        <div>
          {this.props.buttons.map((button: MenuButton, index) => button.toLinkTag(index))}
        </div>
      </Toolbar>
    )
  }

}