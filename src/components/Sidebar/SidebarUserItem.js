import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { getMessages } from "../../redux/actions/messages";
import { changeCurrentRoom } from "../../redux/actions/currentRoom";
import { updateReadStatus } from "../../redux/actions/rooms";
class SidebarUserItem extends React.Component {
  state = {
    nameRoom: "   ",
    status: "online"
  };

  componentDidMount() {
    if (this.props.room.name) {
      this.setState({ nameRoom: this.props.room.name });
    } else {
      let userGet = this.props.room.users.filter(
        user => user._id !== this.props.user._id
      );
      let name = userGet[0].name;
      for (let i = 1; i < userGet.length; i++) {
        name += ", " + userGet[i].name;
      }
      this.setState({ nameRoom: name });
      if (this.props.room.type === "group") this.setState({ status: "online" });
      else this.setState({ status: userGet[0].status });
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.room !== this.props.room) {
      if (this.props.room.name) {
        this.setState({ nameRoom: this.props.room.name });
      } else {
        let userGet = this.props.room.users.filter(
          user => user._id !== this.props.user._id
        );
        let name = userGet[0].name;
        for (let i = 1; i < userGet.length; i++) {
          name += ", " + userGet[i].name;
        }
        this.setState({ nameRoom: name });
        if (this.props.room.type === "group")
          this.setState({ status: "online" });
        else this.setState({ status: userGet[0].status });
      }
    }
  }

  handleChangeRoom = () => {
    this.props.changeCurrentRoom(this.props.room);
  };

  render() {
    return (
      <NavLink
        to={"/room/" + this.props.room._id}
        className="list-group-item list-group-item-action rounded-0 usb-user "
        activeClassName="active"
        onClick={this.handleChangeRoom}
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
            <img
              alt="User avatar"
              src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
              width="50"
              className="rounded-circle"
            />
          </Badge>

          <div className="media-body ml-4 d-inline-block text-truncate">
            <div className="d-flex align-items-center justify-content-between mb-1">
              <h6 className="mb-0 text-truncate" style={{ width: "90%" }}>
                {this.state.nameRoom}
              </h6>
              {!this.props.room.read && (
                <small className="small">
                  <i className="fas fa-circle" style={{ color: "black" }}></i>
                </small>
              )}
            </div>
            <small className="small font-weight-bold">
              {this.props.room.updatedAt}
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
