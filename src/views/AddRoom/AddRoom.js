import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchChipList from "./SearchChipList";
import AddedChipList from "./AddedChipList";
import { connect } from "react-redux";
import { createRoom } from "../../redux/actions/rooms";

class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      search: "",
      usersAdded: [],
      roomNameError: false,
      roomNameErrorMsg: ""
    };
  }

  handleNameChange = e => {
    this.setState({ roomName: e.target.value.trim() });
  };
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  handleAddChip = data => {
    this.setState(state => ({ usersAdded: [...state.usersAdded, data] }));
    this.setState({ search: "" });
    this.setState({
      roomNameError: false,
      roomNameErrorMsg: ""
    });
  };

  handleDeleteChip = data => {
    let r = this.state.usersAdded.filter(
      userAdded => String(userAdded._id) !== String(data)
    );
    this.setState({ usersAdded: [...r] });
  };

  handleSubmit = () => {
    if (this.state.usersAdded.length === 0) {
      this.setState({
        roomNameErrorMsg: "No user is added",
        roomNameError: true
      });
    } else {
      let users = this.state.usersAdded.map(user => user._id);
      let data = { users };
      if (this.state.roomName !== "")
        data = { ...data, name: this.state.roomName };
      console.log(data);
      this.props.createRoom(data);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.status === "created" && prevProps.status === "creating") {
      this.props.back();
    }
  }

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
            minHeight: "500px",
            maxHeight: "700px",
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
            {this.state.roomNameError && (
              <p style={{ color: "red" }}>{this.state.roomNameErrorMsg}</p>
            )}
            <AddedChipList
              usersAdded={this.state.usersAdded}
              handleDeleteChip={this.handleDeleteChip}
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
              type="search"
            />
            <SearchChipList
              usersAdded={this.state.usersAdded}
              users={this.props.users}
              search={this.state.search}
              handleAddChip={this.handleAddChip}
            />
          </div>
          <div
            id="btnConfirm"
            style={{
              position: "absolute",
              bottom: "20px"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={this.props.status === "creating"}
              onClick={this.handleSubmit}
            >
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
const mapStateToProps = state => ({
  users: state.users,
  status: state.rooms.status
});
export default connect(mapStateToProps, { createRoom })(AddRoom);
