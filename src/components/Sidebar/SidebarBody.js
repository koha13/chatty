import React from "react";
import SidebarUserItem from "./SidebarUserItem";
import Button from "@material-ui/core/Button";
import AddRoom from "../../views/AddRoom/AddRoom";
import Loading from "../Loading";
import { connect } from "react-redux";

class SidebarBody extends React.Component {
  state = {
    addRoom: false
  };

  handleAddRoom = e => {
    e.stopPropagation();
    this.setState(state => ({
      addRoom: !state.addRoom
    }));
  };

  render() {
    return (
      <div className="usb-content">
        {this.props.status === "fetching" && <Loading />}
        <Button id="addBtn" variant="contained" onClick={this.handleAddRoom}>
          Add
        </Button>
        {this.state.addRoom && <AddRoom back={this.handleAddRoom} />}
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
  status: state.rooms.status,
  rooms: state.rooms.data,
  user: state.user
});

export default connect(mapStateToProps)(SidebarBody);
