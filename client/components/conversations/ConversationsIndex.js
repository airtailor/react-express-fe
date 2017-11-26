import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { getConversations } from "../../actions";
import SectionHeader from "../SectionHeader";

class ConversationsIndex extends Component {
  componentDidMount() {
    this.props
      .getConversations(this.props.currentUser.user.store_id)
      .catch(err => console.log("err", err));
  }

  renderConversations(props) {
    const { conversations } = props;

    return conversations.map((convo, index) => {
      const { id } = convo;
      const { name } = convo.recipient;

      const read = { color: "green", status: "Caught Up" };
      const unread = { color: "red", status: "Unread" };
      const { color, status } = convo.sender_read ? read : unread;

      const route = `/conversations/${id}`;
      return (
        <div key={index}>
          <div className="conversation-row-container">
            <div className="conversation-row">
              <Link to={route} className="conversation-row-link">
                <div className="conversation-cell">#{id}</div>
                <div className="conversation-cell">{name}</div>
                <div className="conversation-cell" style={{ color }}>
                  {status}
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const headerText = "Conversations";
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="conversations-container">
            {this.renderConversations(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConversations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsIndex);
