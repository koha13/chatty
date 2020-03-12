import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTyping from "./ChatTyping";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import roomApi from "../../axios/room";
import { changeCurrentRoom } from "../../redux/actions/currentRoom";

class Chat extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    let roomId = this.props.history.location.pathname.substring(6);
    if (roomId !== this.props.currentRoom._id) {
      roomApi
        .get("/" + roomId, {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        })
        .then(res => {
          this.props.changeCurrentRoom(res.data);
          this.setState({ loaded: true });
        });
    }
  }

  componentDidUpdate() {
    let roomId = this.props.history.location.pathname.substring(6);
    if (roomId !== this.props.currentRoom._id) {
      if (this.state.loaded === true) this.setState({ loaded: false });
      roomApi
        .get("/" + roomId, {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        })
        .then(res => {
          this.props.changeCurrentRoom(res.data);
          if (this.state.loaded === false) this.setState({ loaded: true });
        });
    }
  }

  render() {
    return (
      <div className="col-lg-6 col-sm-12 px-0 chat-box d-flex flex-column">
        {this.state.loaded && (
          <React.Fragment>
            <ChatHeader
              currentRoom={this.props.currentRoom}
              user={this.props.user}
            />

            <ChatBody />

            <ChatTyping />
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom,
    user: state.user,
    token: state.user.token
  };
};
export default withRouter(
  connect(mapStateToProps, { changeCurrentRoom })(Chat)
);
