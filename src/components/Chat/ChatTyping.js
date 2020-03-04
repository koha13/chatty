import React from "react";
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
    this.props.addMessage(this.state.chatContent);
    this.setState({ chatContent: "" });
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

export default connect(null, { addMessage })(ChatTyping);
