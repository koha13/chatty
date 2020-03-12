import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { getMessages } from "../../redux/actions/messages";
import { changeCurrentRoom } from "../../redux/actions/currentRoom";
import { updateReadStatus } from "../../redux/actions/rooms";
class SidebarUserItem extends React.Component {
  state = {
    nameRoom: "",
    members: "",
    status: "online",
    avatarRoom: ""
  };

  componentDidMount() {
    if (this.props.room.name) {
      this.setState({ nameRoom: this.props.room.name });
    }

    let userGet = this.props.room.users.filter(
      user => user._id !== this.props.user._id
    );
    let name = userGet[0].name;
    for (let i = 1; i < userGet.length; i++) {
      name += ", " + userGet[i].name;
    }
    this.setState({ members: name });
    if (this.props.room.type === "group")
      this.setState({
        status: "online",
        avatarRoom: "https://image.flaticon.com/icons/png/512/32/32441.png"
      });
    else
      this.setState({
        status: userGet[0].status,
        avatarRoom: userGet[0].avatar
      });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.room !== this.props.room) {
      if (this.props.room.name) {
        this.setState({ nameRoom: this.props.room.name });
      }

      let userGet = this.props.room.users.filter(
        user => user._id !== this.props.user._id
      );
      let name = userGet[0].name;
      for (let i = 1; i < userGet.length; i++) {
        name += ", " + userGet[i].name;
      }
      this.setState({ members: name });
      if (this.props.room.type === "group") this.setState({ status: "online" });
      else this.setState({ status: userGet[0].status });
    }
  }

  render() {
    return (
      <NavLink
        to={"/room/" + this.props.room._id}
        className="list-group-item list-group-item-action rounded-0 usb-user "
        activeClassName="active"
      >
        <div className="media">
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            color={this.state.status === "online" ? "primary" : "error"}
            badgeContent={this.state.status}
          >
            <Avatar alt="User" src={this.state.avatarRoom} />
          </Badge>

          <div className="media-body ml-4 d-inline-block text-truncate">
            <div className="d-flex align-items-center justify-content-between mb-1">
              <h6 className="mb-0 text-truncate" style={{ width: "90%" }}>
                {this.state.nameRoom === ""
                  ? this.state.members
                  : this.state.nameRoom}
              </h6>
              {!this.props.room.read && (
                <small className="small">
                  <i className="fas fa-circle" style={{ color: "black" }}></i>
                </small>
              )}
            </div>
            <small className="small font-weight-bold">
              {this.state.members}
            </small>
          </div>
        </div>
      </NavLink>
    );
  }
}
export default connect(null, {
  changeCurrentRoom,
  getMessages,
  updateReadStatus
})(SidebarUserItem);
