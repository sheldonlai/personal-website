
import * as React from 'react';
import {home_content} from "../contents/home_content";
import {JaggedList} from "../components/Templates/JaggedList";
import Grid from "@material-ui/core/es/Grid/Grid";

export class Home extends React.Component{
  render() {
    return (
      <div>

        <JaggedList  listItems={home_content}/>

      </div>
    )
  }
}