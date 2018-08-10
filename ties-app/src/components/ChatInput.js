import React, { Component } from 'react';
import './ties.css';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      list: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ msg: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.msg === "") {
      return
    }
    const newItem = {
      msg: this.state.msg,
      id: Date.now(),
    }
    this.setState(prevState => ({
      list: prevState.list.concat(newItem),
      msg: "",
    }))
  }

  render() {
    return (
      <div className="ChatInput">
        <form onSubmit={this.handleSubmit}>
          <input id="chatInputText" onChange={this.handleChange} value={this.state.msg}/>
        </form>
        <button onClick={this.handleSubmit} msg="0">
          test
        </button>
      </div>
    );
  }
}

export default ChatInput;
