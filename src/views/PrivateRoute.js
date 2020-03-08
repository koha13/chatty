import React from "react";
import { Redirect, Route } from "react-router-dom";
import { addRooms } from "../redux/actions/rooms";
import { getUsers } from "../redux/actions/users";
import { connect } from "react-redux";
import socketio from "../socketio-client/index";

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.addRooms();
    this.props.getUsers();
    socketio();
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
}

export default connect(null, { addRooms, getUsers })(PrivateRoute);
