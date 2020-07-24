import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export default function index({ joke }) {
  if (joke && joke.value && joke.icon_url)
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="a joke some fun" src={joke.icon_url} />
        </ListItemAvatar>
        <ListItemText primary={joke.value} />
      </ListItem>
    );
  return null;
}
