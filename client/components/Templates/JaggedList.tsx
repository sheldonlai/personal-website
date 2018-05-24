import * as React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Paper from "@material-ui/core/Paper/Paper";
import {CSSTransition} from "react-transition-group";
import Chip from "@material-ui/core/Chip/Chip";

export interface ListElementProps {
  title: string
  description: string
  img?: string | string[]
  url?: string
  caption?: string
  used?: string[]
}

const marginTop = {marginTop: 10};

export class ListElement {

  title: string;
  description: string;
  img?: string | string[];
  url?: string;
  caption?: string;
  used?: string[];

  constructor(props: ListElementProps) {
    this.title = props.title;
    this.description = props.description;
    this.img = (props.img) ? props.img : undefined;
    this.caption = (props.caption) ? props.caption : undefined;
    this.url = (props.url) ? props.url : undefined;
    this.used = (props.used) ? props.used : undefined;
  }

  generateChipList = () => {
    if (!this.used || this.used.length == 0) {
      return undefined
    }
    return (
      <div style={marginTop}>
        {this.used.map((e, i) => (<Chip key={i} label={e}/>))}
      </div>
    )
  };

  getImages = () => {
    if (!this.img)
      return undefined;
    if (Array.isArray(this.img)) {
      let list: string[] = this.img;
      return (
        <div style={{textAlign: "center", ...marginTop}}>
          {list.map((im, i) => <img key={i} style={{maxWidth: "500px", width: "100%"}} src={im}/>)}
          {this.caption ?
            <Typography variant="caption">
              {this.caption}
            </Typography> : undefined}
        </div>
      );
    } else {
      return (
        <div style={{textAlign: "center", ...marginTop}}>
          <img style={{maxWidth: "500px", width: "100%"}} src={this.img}/>
          {this.caption ?
            <Typography variant="caption">
              {this.caption}
            </Typography> : undefined}
        </div>
      );
    }
  };

  toDOM() {
    return (
      <Grid item xs={12} sm={8} md={10} style={{position: "relative"}}>
        <Paper style={{padding: "10px 20px"}} elevation={1}>
          <Typography variant="display1" style={{margin: "20px 0"}}>{this.title}</Typography>
          {this.url ? <Typography><a href={this.url}>{this.url}</a></Typography> : undefined}
          {this.generateChipList()}
          <Typography variant="body1" style={marginTop}>{this.description}</Typography>
          {this.getImages()}
        </Paper>
      </Grid>
    )
  }
}

interface props {
  listItems: ListElement[];
}

interface state {
  loading: boolean[]
}

export class JaggedList extends React.Component<props, state> {

  constructor(props) {
    super(props);

    this.state = {
      loading: this.props.listItems.map(() => true)
    };
  }

  componentDidMount() {
    this.timeout_load(0)
  }

  timeout_load = (i: number) => {
    setTimeout(() => {
      let newList = this.state.loading.slice();
      newList[i] = false;
      this.setState({loading: newList});
      if (i < this.state.loading.length - 1) {
        this.timeout_load(i + 1);
      }
    }, 50);
  };

  animatedListItem = (content, key) => {
    let className = (key % 2 == 0) ? "slideright" : "slideleft";
    return (
      <CSSTransition
        key={key}
        in={!this.state.loading[key]}
        timeout={800}
        classNames={className}>
        {() => (content)}
      </CSSTransition>

    )
  };

  render() {
    let l = [];
    let hidden = (key) => (
      <Hidden only="xs" key={key}>
        <Grid item xs={12} sm={4} md={2}/>
      </Hidden>
    );
    // create jagged list
    for (let i = 0; i < this.props.listItems.length; i++) {

      if (i % 2 == 0) {
        l.push(hidden(i.toString() + "_hidden"));
        l.push(this.animatedListItem(this.props.listItems[i].toDOM(), i));
      } else {
        l.push(this.animatedListItem(this.props.listItems[i].toDOM(), i));
        l.push(hidden(i.toString() + "_hidden"));
      }
    }

    // return results
    return (
      <div>
        <CSSTransition
          in={true}
          timeout={800}
          classNames="fade">
          {() => (
            <Grid container spacing={32} style={{overflow: "hidden", paddingTop: "24px"}}>
              {l}
            </Grid>
          )}
        </CSSTransition>
      </div>
    )
  }
}