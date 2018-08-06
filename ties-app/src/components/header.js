import React, { Component } from 'react';
import logo from "../logo.svg";
import './ties.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
    }
  }

  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default Header;
