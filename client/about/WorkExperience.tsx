import * as React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

export interface IWorkExperience {
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
}

export class WorkExperience {

  company: string;
  position: string;
  startDate?: string;
  endDate?: string;

  constructor(config: IWorkExperience) {
    this.company = config.company;
    this.position = config.position;
    this.startDate = config.startDate;
    this.endDate = config.endDate;
  }

  toDOM(key) {
    let end = (this.endDate) ? this.endDate : "Present";
    return (
      <div key={key}>
        <div>
          <Typography variant="subheading" style={{display: "inline-block", marginRight: 15}} color="inherit">
            {this.company}
          </Typography>
          <Typography variant="subheading" style={{display: "inline-block"}} color="primary">
            {this.position}
          </Typography>
        </div>
        {this.startDate ?
          <Typography variant="caption">
            {this.startDate + " - " + end}
          </Typography>
          : undefined
        }

      </div>
    )
  }
}