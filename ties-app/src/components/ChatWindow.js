import React, { Component } from 'react';
import './ties.css';

class ChatWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
    }
  }

  render() {
    return (
      <div className="ChatWindow">
        <p>
        hier komt de Chat
        </p>
      </div>
    );
  }
}

export default ChatWindow;
