import React from "react";

export default ({ message }) => {
  return (
    <div className="d-flex justify-content-center mb-2">
      <div className="msg_cotainer_noti">{message.content}</div>
    </div>
  );
};
