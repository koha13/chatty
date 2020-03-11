import React from "react";

export default ({ message }) => {
  return (
    <div className="d-flex justify-content-end mb-2">
      {message.type === "message" ? (
        <div className="msg_cotainer_send">{message.content}</div>
      ) : (
        <img src={message.content} className="msg_send_media" alt="gif" />
      )}
    </div>
  );
};
