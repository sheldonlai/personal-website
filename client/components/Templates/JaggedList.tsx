import * as React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Paper from "@material-ui/core/Paper/Paper";

export interface ListElementProps {
  title: string
  description: string
  img? : string
  url? : string
}

export class ListElement {

  title: string;
  description: string;
  img? : string;
  url? : string;

  constructor(props: ListElementProps) {
    this.title = props.title;
    this.description = props.description;
    this.img = (props.img) ? props.img : undefined;
    this.url = (props.url) ? props.url: undefined;
  }

  toDOM() {
    return (
      <Grid item xs={12} sm={8} md={10}>
        <Paper style={{padding: "10 20", width: "100%"}} elevation={1}>
          <Typography variant="display2">{this.title}</Typography>
          <Typography variant="body2">{this.description}</Typography>
        </Paper>
      </Grid>
    )
  }


}

interface props {
  listItems: ListElement[];
}

export class JaggedList extends React.Component<props> {

  render() {
    let l = [];
    // create jagged list
    for (let i = 0; i < this.props.listItems.length; i ++) {
      if (i % 2 == 0) {
        l.push(
          <Hidden only="xs">
            <Grid item xs={12} sm={4} md={2}/>
          </Hidden>
        );
        l.push(this.props.listItems[i].toDOM())
      } else {
        l.push(this.props.listItems[i].toDOM());
        l.push(
          <div>
            <Hidden only="xs">
              <Grid item xs={12} md={2}/>
            </Hidden>
          </div>
        );
      }
    }

    // return results
    return (
      <div>
        <Grid container spacing={16}>
          {l}
        </Grid>
      </div>
    )
  }
}