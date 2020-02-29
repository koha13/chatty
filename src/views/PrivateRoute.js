import React from "react";
import { Redirect, Route } from "react-router-dom";
import roomApi from "../axios/room";
import { addRooms } from "../redux/actions";
import { connect } from "react-redux";

class PrivateRoute extends React.Component {
  componentDidMount() {
    roomApi
      .get("/", {
        headers: {
          Authorization: "Bearer " + this.props.user.token
        }
      })
      .then(res => {
        this.props.addRooms(res.data);
      })
      .catch(err => {});
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

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { addRooms: addRooms })(PrivateRoute);
