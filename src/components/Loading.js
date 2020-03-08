import React from "react";

const Loading = props => {
  let className = "fas fa-circle-notch fa-spin";
  if (props.size) className += " " + props.size;
  else className += " fa-2x";
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <i className={className}></i>
    </div>
  );
};

export default Loading;
