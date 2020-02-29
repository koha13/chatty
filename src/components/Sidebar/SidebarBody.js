import React from "react";
import SidebarUserItem from "./SidebarUserItem";
import { connect } from "react-redux";

class SidebarBody extends React.Component {
  render() {
    return (
      <div className="usb-content">
        <div className="list-group rounded-0">
          {this.props.rooms.map(room => (
            <SidebarUserItem
              room={room}
              key={room._id}
              user={this.props.user}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  user: state.user
});

export default connect(mapStateToProps)(SidebarBody);
