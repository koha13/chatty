import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTyping from "./ChatTyping";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import roomApi from "../../axios/room";
import { changeCurrentRoom } from "../../redux/actions/currentRoom";
import RightSide from "../RightSide/index";

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
        })
        .catch(err => {
          if (err)
            if (this.state.loaded !== "fail") this.setState({ loaded: "fail" });
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
        })
        .catch(err => {
          if (err)
            if (this.state.loaded !== "fail") this.setState({ loaded: "fail" });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 col-sm-12 px-0 chat-box d-flex flex-column">
          {this.state.loaded === true && (
            <React.Fragment>
              <ChatHeader
                currentRoom={this.props.currentRoom}
                user={this.props.user}
              />

              <ChatBody />

              <ChatTyping />
            </React.Fragment>
          )}
          {this.state.loaded === "fail" && (
            <div className="cb-content px-4 pt-2 flex-grow-1">
              Loaded failed
            </div>
          )}
        </div>
        {this.state.loaded === true && <RightSide />}
      </React.Fragment>
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
