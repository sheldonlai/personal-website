
import * as React from 'react';
import {home_content} from "../contents/home_content";
import {JaggedList} from "../components/Templates/JaggedList";
import Typography from "@material-ui/core/Typography/Typography";

export class Home extends React.Component{
  render() {
    return (
      <div style={{maxWidth: "1400px", margin: "0 auto", paddingTop: 20}}>
        <div style={{textAlign: "center"}}>
        <Typography variant="display2">Some Personal Projects I have done:</Typography>
        </div>
        <JaggedList  listItems={home_content}/>

      </div>
    )
  }
}