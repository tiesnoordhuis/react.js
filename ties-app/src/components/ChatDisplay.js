import React, { Component } from 'react';
import './ties.css';

class ChatDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["1", "2"],
    };

  }

  buildMsgBox() {
    var msgBox;
    for (var i = 0; i < this.state.list.length; i++) {
      msgBox += <p>this.state.list[i]</p>;
    }
    this.setState({list: msgBox});
  }

  render() {
    return (
      <div className="ChatDisplay">
        buildMsgBox();
        <p>this.state.list</p>
      </div>
    );
  }
}

export default ChatDisplay;
