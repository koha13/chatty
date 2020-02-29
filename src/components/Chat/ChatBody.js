import React from "react";
import ChatItemSend from "./ChatItemSend";
import ChatItemReceive from "./ChatItemReceive";
import { connect } from "react-redux";

class ChatBody extends React.Component {
  render() {
    let result = Object.keys(this.props.messages);
    return (
      <div className="cb-content px-4 pt-2 flex-grow-1">
        {result.map(key => {
          if (this.props.messages[key].user === this.props.user._id) {
            return <ChatItemSend key={this.props.messages[key]._id} />;
          } else return <ChatItemReceive key={this.props.messages[key]._id} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    messages: state.messages,
    user: state.user
  };
};

export default connect(mapStateToProps)(ChatBody);
