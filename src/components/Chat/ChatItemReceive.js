import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

class ChatItemReceive extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="d-flex justify-content-start mb-2">
        <div className="img_cont_msg">
          <Avatar
            alt={this.props.user[0].name}
            src={this.props.user[0].avatar}
          />
          {/* <img
            src={this.props.user.avatar}
            className="rounded-circle user_img_msg"
            alt="User avatar"
          /> */}
        </div>
        <pre className="msg_cotainer">{this.props.message.content}</pre>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.filter(user => user._id === ownProps.message.user)
  };
};
export default connect(mapStateToProps)(ChatItemReceive);
