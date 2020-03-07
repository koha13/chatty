import React from "react";

export default ({ message }) => {
  return (
    <div className="d-flex justify-content-end mb-4">
      <pre className="msg_cotainer_send">
        {message.content}
        {/* <span className="msg_time_send">{message.createdAt}</span> */}
      </pre>
    </div>
  );
};
