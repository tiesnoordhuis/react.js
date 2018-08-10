import React, { Component } from 'react';
import './ties.css';
import ChatInput from "./ChatInput.js"
import ChatDisplay from "./ChatDisplay.js"

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
        <ChatDisplay />
        <ChatInput />
        <p>
        hier komt de Chat
        </p>
      </div>
    );
  }
}

export default ChatWindow;
