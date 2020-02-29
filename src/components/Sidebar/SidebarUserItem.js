import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { changeCurrentRoom, resetMessages } from "../../redux/actions";
class SidebarUserItem extends React.Component {
  state = {
    nameRoom: "   "
  };

  componentDidMount() {
    if (this.props.room.type === "group") {
      this.setState({ nameRoom: this.props.room.name });
    } else {
      let userGet = this.props.room.users.filter(
        user => user._id !== this.props.user._id
      );
      this.setState({ nameRoom: userGet[0].name });
    }
  }

  handleChangeRoom = () => {
    this.props.changeCurrentRoom(this.props.room);
    this.props.resetMessages();
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
            color="error"
            badgeContent={"offline"}
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
              <h6 className="mb-0">{this.state.nameRoom}</h6>
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
export default connect(null, { changeCurrentRoom, resetMessages })(
  SidebarUserItem
);
