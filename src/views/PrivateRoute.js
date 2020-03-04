import React from "react";
import { Redirect, Route } from "react-router-dom";
import { addRooms } from "../redux/actions";
import { connect } from "react-redux";

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.addRooms();
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

export default connect(null, { addRooms: addRooms })(PrivateRoute);
