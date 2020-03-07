import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

function DeleteIcon() {
  return (
    <i
      className="fas fa-times-circle fa-sm"
      style={{ marginRight: "10px" }}
    ></i>
  );
}

export default class AddRoom extends React.Component {
  state = {
    roomName: "",
    search: ""
  };

  handleNameChange = e => {
    this.setState({ roomName: e.target.value });
  };
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div
        onClick={this.props.back}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.15)",
          zIndex: "1000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          style={{
            position: "absolute",
            background: "beige",
            height: "500px",
            width: "500px",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1 style={{ textAlign: "center" }}>Create room: </h1>
          <form style={{ margin: "20px 0" }}>
            <TextField
              value={this.state.roomName}
              onChange={this.handleNameChange}
              id="outlined-basic"
              label="Room's name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </form>
          <div style={{ margin: "10px 0" }}>
            <Chip
              style={{ margin: "5px" }}
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label="Deletable"
              color="primary"
              onDelete={() => {}}
              deleteIcon={<DeleteIcon />}
              clickable
            />
          </div>
          <div>
            <TextField
              value={this.state.search}
              onChange={this.handleSearchChange}
              label="Search user"
              id="filled-size-small"
              variant="outlined"
              size="small"
            />
            <Chip
              style={{ margin: "5px" }}
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label="Deletable"
              clickable
            />
            <Chip
              style={{ margin: "5px" }}
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label="Deletable"
              clickable
            />
            <Chip
              style={{ margin: "5px" }}
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label="Deletable"
              clickable
            />
          </div>
          <div
            id="btnConfirm"
            style={{
              position: "absolute",
              bottom: "20px"
            }}
          >
            <Button variant="contained" color="primary" disabled={false}>
              Create
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.props.back}
            >
              Cancle
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
