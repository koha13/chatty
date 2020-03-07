import React from "react";

export default class ChatHeader extends React.Component {
  state = {
    nameRoom: "   ",
    status: "online"
  };

  componentDidMount() {
    if (this.props.currentRoom.type === "group") {
      this.setState({ nameRoom: this.props.currentRoom.name });
    } else {
      let userGet = this.props.currentRoom.users.filter(
        user => user._id !== this.props.user._id
      );
      this.setState({ nameRoom: userGet[0].name, status: userGet[0].status });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentRoom !== this.props.currentRoom) {
      if (this.props.currentRoom.type === "group") {
        this.setState({ nameRoom: this.props.currentRoom.name });
      } else {
        let userGet = this.props.currentRoom.users.filter(
          user => user._id !== this.props.user._id
        );
        this.setState({ nameRoom: userGet[0].name, status: userGet[0].status });
      }
    }
  }

  render() {
    return (
      <div className="cb-header d-flex flex-row justify-content-start align-items-center px-2">
        <div className="img-contain m-2" style={{ width: "50px" }}>
          <img
            src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
            alt="user"
            width="50"
            className="rounded-circle"
          />
        </div>
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
        <i className="fas fa-ellipsis-v m-2"></i>
      </div>
    );
  }
}
