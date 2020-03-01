import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTyping from "./ChatTyping";
import { connect } from "react-redux";
import { getMessages } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import messageApi from "../../axios/message";

class Chat extends React.Component {
  state = {
    idRoom: ""
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let idRoom = nextProps.match.params.idRoom;
    if (nextProps.match.params.idRoom !== prevState.idRoom) {
      messageApi
        .get("/" + idRoom, {
          headers: {
            Authorization: "Bearer " + nextProps.user.token
          }
        })
        .then(res => {
          nextProps.getMessages(res.data);
          return {
            idRoom
          };
        })
        .catch(err => {
          return {
            idRoom
          };
        });
    }
    return {
      idRoom: prevState.idRoom
    };
  }

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
export default withRouter(connect(mapStateToProps, { getMessages })(Chat));
