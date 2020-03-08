import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../redux/actions/user";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    avatar: ""
  };

  componentDidUpdate() {
    if (this.props.user.token) {
      console.log("here");
      this.props.history.push("/");
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { name, email, password, avatar } = this.state;
    this.props.signup({ name, email, password, avatar });
  };

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <h1>SIGN UP PLZZZZ</h1>
        <div style={{ width: "300px", margin: "5px", textAlign: "center" }}>
          Name must have atleast 6 character. And plz fill that form correctly.
          Too lazy to handle validation! TY
        </div>
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={this.handleSubmit}
        >
          <TextField
            name="name"
            required
            label="Name"
            variant="outlined"
            style={{ width: "300px", margin: "5px" }}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <TextField
            name="email"
            required
            label="Email"
            variant="outlined"
            style={{ width: "300px", margin: "5px" }}
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <TextField
            name="password"
            required
            label="Password"
            type="password"
            variant="outlined"
            style={{ width: "300px", margin: "5px" }}
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <TextField
            name="avatar"
            label="Avatar URL only"
            variant="outlined"
            style={{ width: "300px", margin: "5px" }}
            value={this.state.avatar}
            onChange={this.handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={this.props.user.status === "signing"}
          >
            Signup
          </Button>
        </form>
        <Link to="/login" style={{ color: "black" }}>
          Login
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps, { signup })(Signup));
