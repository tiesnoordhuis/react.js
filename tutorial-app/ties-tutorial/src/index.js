import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isClicked: false,
        clickedIcon: "X",
        value: this.props.value,
      };
  }

  clickButton() {
    this.setState({value: this.state.clickedIcon})
  }

  render() {
    return (
      <button className="square" onClick={() => {this.clickButton()}}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.gameStateBoard[i]} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      activePlayer: "X",
      inactivePlayer: "O",
      gameWon: false,
      gameState: Array(9).fill(null),
    }
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board gameStateBoard={this.state.gameState} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
