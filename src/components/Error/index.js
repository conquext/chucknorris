import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const errorStyle = makeStyles((theme) => ({
  errorContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  errorButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function index() {
  const classes = errorStyle();
  return (
    <div className={classes.errorContent}>
      <h2>Oops! Something went wrong...</h2>
    </div>
  );
}
