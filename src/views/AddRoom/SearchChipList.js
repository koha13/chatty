import React from "react";
import SearchChip from "./SearchChip";

const SearchChipList = props => {
  let count = 0;
  let rs = [];
  for (let i = 0; i < props.users.length; i++) {
    if (
      String(props.users[i].name)
        .toLowerCase()
        .includes(String(props.search).toLowerCase()) &&
      count <= 10
    ) {
      let check = true;
      for (let j = 0; j < props.usersAdded.length; j++) {
        if (props.users[i]._id === props.usersAdded[j]._id) check = false;
      }
      if (check) {
        count++;
        rs.push(props.users[i]);
      }
    }
  }
  const r = rs.map(chip => (
    <SearchChip
      chip={chip}
      key={chip._id}
      handleAddChip={props.handleAddChip}
    />
  ));
  return <span>{r}</span>;
};

export default SearchChipList;
