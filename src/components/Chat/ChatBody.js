import React from "react";
import ChatItemSend from "./ChatItemReceive";
import ChatItemReceive from "./ChatItemSend";
import { connect } from "react-redux";

class ChatBody extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length === 0) {
      this.divRef.current.scrollTop = this.divRef.current.scrollHeight;
    } else {
      var isScrolled =
        this.divRef.current.scrollHeight -
        this.divRef.current.scrollTop -
        this.divRef.current.clientHeight;
      if (isScrolled <= this.divRef.current.clientHeight)
        this.divRef.current.scrollTop = this.divRef.current.scrollHeight;
    }
  }

  render() {
    let result = this.props.messages.reverse();
    return (
      <div className="cb-content px-4 pt-2 flex-grow-1" ref={this.divRef}>
        {result.map(message => {
          if (message.user !== this.props.user._id) {
            return <ChatItemSend key={message._id} message={message} />;
          } else return <ChatItemReceive key={message._id} message={message} />;
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
