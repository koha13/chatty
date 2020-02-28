import React from "react";
import ChatItemSend from "./ChatItemSend";
import ChatItemReceive from "./ChatItemReceive";

export default () => {
  return (
    <div className="cb-content px-4 pt-2 flex-grow-1">
      <ChatItemSend />
      <ChatItemReceive />
    </div>
  );
};
