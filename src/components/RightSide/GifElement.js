import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/actions/messages";

class GifElement extends React.Component {
  handleClick = () => {
    this.props.sendMessage({
      type: "gif",
      content: this.props.gif.media[0].tinygif.url
    });
  };

  render() {
    return (
      <div style={{ cursor: "pointer" }} onClick={this.handleClick}>
        <img
          src={this.props.gif.media[0].tinygif.url}
          alt={this.props.gif.id}
        />
      </div>
    );
  }
}

export default connect(null, { sendMessage })(GifElement);
