import React from "react";
import AddedChip from "./AddedChip";

const AddedChipList = props => {
  let rs = [];
  for (let i = 0; i < props.usersAdded.length; i++) {
    rs.push(props.usersAdded[i]);
  }
  const r = rs.map(chip => (
    <AddedChip
      chip={chip}
      handleDeleteChip={props.handleDeleteChip}
      key={chip._id}
    />
  ));

  return <div>{r}</div>;
};

export default AddedChipList;
