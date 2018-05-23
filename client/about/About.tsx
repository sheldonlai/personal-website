import * as React from 'react';
import {JaggedList} from "../components/Templates/JaggedList";
import {about_content} from "../contents/about_content";
import Grid from "@material-ui/core/Grid/Grid";

export class About extends React.Component {

  render() {
    return (
      <Grid container justify="center">
        <Grid sm={12} md={10} lg={8}>
          <JaggedList listItems={about_content}/>
        </Grid>
      </Grid>
    )
  }
}