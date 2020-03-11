import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AddUser from "./AddUser/AddUser";

export default class ChatHeader extends React.Component {
  state = {
    nameRoom: "   ",
    status: "offline",
    avatarRoom: "",
    addUser: false
  };

  handleAddUser = e => {
    if (e) e.preventDefault();
    this.setState(state => ({ addUser: !state.addUser }));
  };

  componentDidMount() {
    let userGet = this.props.currentRoom.users.filter(
      user => user._id !== this.props.user._id
    );
    if (this.props.currentRoom.name) {
      this.setState({ nameRoom: this.props.currentRoom.name });
    } else {
      let name = userGet[0].name;
      for (let i = 1; i < userGet.length; i++) {
        name += ", " + userGet[i].name;
      }
      this.setState({ nameRoom: name });
    }
    if (this.props.currentRoom.type === "group") {
      this.setState({
        status: "online",
        avatarRoom: "https://image.flaticon.com/icons/png/512/32/32441.png"
      });
    } else
      this.setState({
        status: userGet[0].status,
        avatarRoom: userGet[0].avatar
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentRoom !== this.props.currentRoom) {
      let userGet = this.props.currentRoom.users.filter(
        user => user._id !== this.props.user._id
      );
      if (this.props.currentRoom.name) {
        this.setState({ nameRoom: this.props.currentRoom.name });
      } else {
        let name = userGet[0].name;
        for (let i = 1; i < userGet.length; i++) {
          name += ", " + userGet[i].name;
        }
        this.setState({ nameRoom: name });
      }
      if (this.props.currentRoom.type === "group") {
        this.setState({
          status: "online",
          avatarRoom: "https://image.flaticon.com/icons/png/512/32/32441.png"
        });
      } else
        this.setState({
          status: userGet[0].status,
          avatarRoom: userGet[0].avatar
        });
    }
  }

  render() {
    return (
      <div className="cb-header d-flex flex-row justify-content-start align-items-center px-2">
        <div className="img-contain m-2" style={{ width: "50px" }}>
          <Avatar src={this.state.avatarRoom} />
        </div>
        {this.state.addUser && <AddUser closeModal={this.handleAddUser} />}
        <div className="flex-grow-1 d-flex flex-column justify-content-center">
          <h6 className="p-0 m-0">{this.state.nameRoom}</h6>

          <span className="p-0 m-0 text-small text-muted">
            <i
              className="fas fa-circle"
              style={{
                color: this.state.status === "online" ? "green" : "red",
                paddingRight: "5px"
              }}
            ></i>
            {this.state.status}
          </span>
        </div>
        <i
          className="fas fa-user-plus fa-lg"
          style={{ cursor: "pointer" }}
          onClick={this.handleAddUser}
        ></i>
      </div>
    );
  }
}
