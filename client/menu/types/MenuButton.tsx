import * as React from 'react'
import {menuButtonStyle} from "../MenuButtonStyles";
import {CustomLink} from "../../components/RoutingComponents/CustomLink";
import Button from "@material-ui/core/Button/Button";

export class MenuButton {
  color : string;
  constructor(public link: string, public name: string) {
    this.color = "#fff"
  }

  setColor(color : string){
    this.color = color;
  }

  toLinkTag(fullWidth?: boolean) {
    return (
      <CustomLink to={this.link} style={{color: this.color}}>
        <Button color="inherit" style={{...menuButtonStyle, width: fullWidth ? "100%" : undefined}}>
          {this.name}
        </Button>
      </CustomLink>
    )
  }
}