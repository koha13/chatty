import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import auth from "../axios/auth";
import { login } from "../redux/actions";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorEmail: "",
    errorPassword: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value.trim()
    });
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    this.setState({
      ["error" + nameCapitalized]: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let check = true;
    if (!validator.isEmail(this.state.email)) {
      this.setState({ errorEmail: "Email?" });
      check = false;
    }

    if (!validator.isLength(this.state.email, { min: 6, max: 32 })) {
      this.setState({ errorEmail: "Length?" });
      check = false;
    }
    if (!validator.isLength(this.state.password, { min: 6, max: 32 })) {
      this.setState({ errorPassword: "Length?" });
      check = false;
    }
    if (check) {
      auth
        .post("/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          this.props.login({ ...res.data.user, token: res.data.token });
          this.props.history.replace("/");
        })
        .catch(err => {
          this.setState({ email: "" });
          this.setState({ password: "" });
        });
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h1 id="title-lg">Chatty</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div>
              <div className="va">
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  value={this.state.Email}
                  onChange={this.handleInputChange}
                />
                {this.state.errorEmail == "" ? null : (
                  <div className="alert-validate">
                    <div className="alert-content">{this.state.errorEmail}</div>
                  </div>
                )}
              </div>
              <div className="va">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                {this.state.errorPassword == "" ? null : (
                  <div className="alert-validate">
                    <div className="alert-content">
                      {this.state.errorPassword}
                    </div>
                  </div>
                )}
              </div>
              <Button variant="contained" color="primary" type="submit">
                SUCK
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { login: login })(LoginScreen));
