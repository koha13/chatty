import React from "react";
import Member from "./Members";
import SearchGif from "./SearchGif";

class RightSide extends React.Component {
  render() {
    return (
      <div className="col-lg-3 px-0 right-side d-flex flex-column">
        <Member />
        <SearchGif />
      </div>
    );
  }
}

export default RightSide;
