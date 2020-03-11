import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

class ChatItemReceive extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-start mb-2">
        <div className="img_cont_msg">
          <Avatar
            alt={this.props.user[0].name}
            src={this.props.user[0].avatar}
          />
        </div>
        {this.props.message.type === "message" ? (
          <div className="msg_cotainer">{this.props.message.content}</div>
        ) : (
          <img
            className="msg_receive_media"
            src={this.props.message.content}
            alt="gif"
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.currentRoom.users.filter(
      user => user._id === ownProps.message.user
    )
  };
};
export default connect(mapStateToProps)(ChatItemReceive);
