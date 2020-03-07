import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

function DeleteIcon() {
  return (
    <i
      className="fas fa-times-circle fa-sm"
      style={{ marginRight: "10px" }}
    ></i>
  );
}

const AddedChip = props => {
  const handleDeleteChip = () => {
    props.handleDeleteChip(props.chip._id);
  };
  return (
    <Chip
      onClick={handleDeleteChip}
      key={props.chip._id}
      style={{ margin: "5px" }}
      avatar={
        <Avatar alt={props.chip.name} src="/static/images/avatar/1.jpg" />
      }
      label={props.chip.name}
      color="primary"
      onDelete={() => {}}
      deleteIcon={<DeleteIcon />}
      clickable
    />
  );
};

export default AddedChip;
