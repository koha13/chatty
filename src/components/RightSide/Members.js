import React from "react";
import { connect } from "react-redux";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

class Members extends React.Component {
  render() {
    return (
      <div className="members">
        {this.props.users
          ? this.props.users.map(user => (
              <Chip
                key={user._id}
                style={{ margin: "5px" }}
                avatar={<Avatar alt={user.name} src={user.avatar} />}
                label={user.name}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.currentRoom.users
  };
};

export default connect(mapStateToProps)(Members);
