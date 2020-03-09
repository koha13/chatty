import React from "react";
import SidebarUserItem from "./SidebarUserItem";
import Button from "@material-ui/core/Button";
import AddRoom from "../../views/AddRoom/AddRoom";
import Loading from "../Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SidebarBody extends React.Component {
  state = {
    addRoom: false
  };

  render() {
    return (
      <div className="usb-content">
        {this.props.status === "fetching" ? (
          <Loading />
        ) : (
          <Link
            to={{
              pathname: "/addroom",
              state: { modal: true }
            }}
          >
            <Button
              id="addBtn"
              variant="contained"
              style={{ zIndex: "1000", height: "40px" }}
            >
              Add room
            </Button>
          </Link>
        )}
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
