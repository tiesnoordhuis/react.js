import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js"
import ChatWindow from "./components/ChatWindow.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
