import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchChipList from "./SearchChipList";
import AddedChipList from "./AddedChipList";
import { connect } from "react-redux";
import roomApi from "../../../axios/room";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      usersAdded: [],
      userAlreadyIn: []
    };
  }

  componentDidMount() {
    this.setState({ userAlreadyIn: [...this.props.usersAddedInRoom] });
  }

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
    let users = this.state.usersAdded.map(user => user._id);
    roomApi.post(
      "/" + this.props.roomId + "/add",
      { users },
      {
        headers: {
          Authorization: "Bearer " + this.props.token
        }
      }
    );
    this.props.closeModal();
  };

  render() {
    return (
      <div
        onClick={() => this.props.closeModal()}
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
          <h1 style={{ textAlign: "center" }}>Add users</h1>
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
              userAlreadyIn={this.state.userAlreadyIn}
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
              onClick={this.handleSubmit}
              disabled={this.state.usersAdded.length === 0}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.closeModal()}
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
  usersAddedInRoom: state.currentRoom.users,
  roomId: state.currentRoom._id,
  token: state.user.token
});
export default connect(mapStateToProps)(AddUser);
