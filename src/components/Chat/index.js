import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTyping from "./ChatTyping";

export default () => {
  return (
    <div className="col-6 px-0 chat-box d-flex flex-column">
      <ChatHeader />

      <ChatBody />

      <ChatTyping />
    </div>
  );
};
