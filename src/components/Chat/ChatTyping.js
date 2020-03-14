import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/actions/messages";
import TextareaAutosize from "react-textarea-autosize";

class ChatTyping extends React.Component {
  state = {
    chatContent: ""
  };

  handleTypingChange = e => {
    this.setState({ chatContent: e.target.value });
  };

  handleSubmit = () => {
    this.props.sendMessage({
      content: this.state.chatContent,
      type: "message"
    });
    this.setState({ chatContent: "" });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit();
    }
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
          <TextareaAutosize
            type="text"
            className="form-control"
            minRows={1}
            maxRows={4}
            value={this.state.chatContent}
            onChange={this.handleTypingChange}
            onKeyDown={this.handleKeyDown}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i
                className="fa fa-paper-plane"
                onClick={this.handleSubmit}
                style={{ cursor: "pointer" }}
              ></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(null, { sendMessage })(ChatTyping);
