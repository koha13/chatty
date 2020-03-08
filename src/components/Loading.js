import React from "react";

const Loading = () => {
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
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </div>
  );
};

export default Loading;
