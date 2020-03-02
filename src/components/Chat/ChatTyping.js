import React from "react";
import messageApi from "../../axios/message";
import { connect } from "react-redux";
import { addMessage } from "../../redux/actions";

class ChatTyping extends React.Component {
  state = {
    chatContent: ""
  };

  handleTypingChange = e => {
    this.setState({ chatContent: e.target.value });
  };

  handleSubmit = () => {
    messageApi
      .post(
        "/" + this.props.currentRoom._id,
        {
          content: this.state.chatContent
        },
        {
          headers: {
            Authorization: "Bearer " + this.props.user.token
          }
        }
      )
      .then(res => {
        this.props.addMessage(res.data);
        this.setState({ chatContent: "" });
      });
  };

  render() {
    return (
      <form>
        <div className="input-group my-1 border border-1 border-dark rounded">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-images"></i>
            </span>
          </div>
          <textarea
            type="text"
            className="form-control"
            rows="1"
            value={this.state.chatContent}
            onChange={this.handleTypingChange}
          ></textarea>
          <div className="input-group-append">
            <span className="input-group-text" onClick={this.handleSubmit}>
              <i className="fa fa-paper-plane"></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom,
    user: state.user
  };
};

export default connect(mapStateToProps, { addMessage })(ChatTyping);
