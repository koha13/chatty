import React from "react";
import ChatItemSend from "./ChatItemReceive";
import ChatItemReceive from "./ChatItemSend";
import { connect } from "react-redux";
import Loading from "../Loading";
import Button from "@material-ui/core/Button";
import { moreMessages } from "../../redux/actions/messages";
import ChatItemNoti from "./ChatItemNoti";

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
    let result = Object.keys(this.props.messages).reverse();
    return (
      <div className="cb-content px-4 pt-2 flex-grow-1" ref={this.divRef}>
        {this.props.status === "fetching" && <Loading />}
        {this.props.messages.length >= 20 &&
        this.props.moreMsgStatus !== "noMoreMsg" ? (
          <Button
            variant="outlined"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={() => this.props.moreMessages()}
            disabled={this.props.moreMsgStatus === "moreMsg"}
          >
            {this.props.moreMsgStatus === "moreMsg"
              ? "Loading"
              : "More messages"}
          </Button>
        ) : null}
        {result.map(key => {
          if (this.props.messages[key].type === "noti") {
            return (
              <ChatItemNoti
                message={this.props.messages[key]}
                key={this.props.messages[key]._id}
              />
            );
          }
          if (this.props.messages[key].user !== this.props.user._id) {
            return (
              <ChatItemSend
                key={this.props.messages[key]._id}
                message={this.props.messages[key]}
              />
            );
          } else
            return (
              <ChatItemReceive
                key={this.props.messages[key]._id}
                message={this.props.messages[key]}
              />
            );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    moreMsgStatus: state.messages.moreMsgStatus,
    status: state.messages.status,
    messages: state.messages.data,
    user: state.user
  };
};

export default connect(mapStateToProps, { moreMessages })(ChatBody);
