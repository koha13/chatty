import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTyping from "./ChatTyping";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Chat extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-sm-12 px-0 chat-box d-flex flex-column">
        <ChatHeader
          currentRoom={this.props.currentRoom}
          user={this.props.user}
        />

        <ChatBody />

        <ChatTyping />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom,
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps)(Chat));
