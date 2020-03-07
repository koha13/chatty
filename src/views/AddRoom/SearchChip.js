import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const SearchChip = props => {
  const handleAddChip = () => {
    props.handleAddChip(props.chip);
  };
  return (
    <Chip
      onClick={handleAddChip}
      style={{ margin: "5px" }}
      avatar={
        <Avatar alt={props.chip.name} src="/static/images/avatar/1.jpg" />
      }
      label={props.chip.name}
      clickable
    />
  );
};

export default SearchChip;
