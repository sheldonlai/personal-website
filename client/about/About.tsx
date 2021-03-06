import * as React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import {CSSTransition} from "react-transition-group";
import {work_experiences} from "../contents/about_content";

const margin = {marginTop: 10};

export class About extends React.Component {

  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({loading: false})
  }

  render() {
    return (
      <Grid container justify="center">
        <CSSTransition
          in={!this.state.loading}
          timeout={800}
          classNames="fadeslow">
          {() => (
            <Grid item xs={12} sm={12} md={8} lg={6}>
              <Typography variant="display1" style={{textAlign: "center", ...margin}}>About Me</Typography>
              <Typography variant="body2" style={margin} gutterBottom>
                I am a soon to be graduated Computer Science student from the University of British Columbia.
                I have a strong interest in software engineering. In other words, I just like solving moderately
                hard problems efficiently. With that said, I am still pretty good at mundane tasks like implementing
                and designing websites. In the field of machine learning, I am no expert, but good enough to understand
                and implement network architectures described in published papers.
              </Typography>

              <Typography variant="headline" gutterBottom>Past Work Experiences:</Typography>
              {work_experiences.map((e, i) => e.toDOM(i))}
              <Typography variant="body2" gutterBottom style={margin}>
                If you have any questions or you wish to get a copy of my CV/resume,
                please contact me with the email below.
              </Typography>
              <Typography variant="headline" style={margin}>
                Contact Me @:
              </Typography>
              <Typography variant="subheading" style={margin}>
                contact@sheldonlai.net
              </Typography>
            </Grid>

          )}
        </CSSTransition>
      </Grid>
    )
  }
}