import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentBox: 0,
      time: 30,
      timeleft: null,
      dashbord: [],
      score: 0,
      isPlaying: false,
    };
    this.startGame = this.startGame.bind(this);
    this.plusScore = this.plusScore.bind(this);
  }
  startGame() {
    this.setState({ isPlaying: true });
    this.updateTimer();
    this.moveCell();
  }
  updateTimer() {
    let timeleft = this.state.time;
    let updTimer = setInterval(() => {
      timeleft = this.state.timeleft - 1;
      if (timeleft === 0) {
        this.endGame();
        clearInterval(updTimer);
      }
      this.setState({ timeleft });
    }, 1000);
    return this.setState({ timeleft });
  }
  moveCell() {
    let mCell = setInterval(() => {
      let currentBox = this.state.board[Math.floor(Math.random() * 9)];
      this.setState({ currentBox });
      if (this.state.timeleft === 0) {
        clearInterval(mCell);
      }
    }, 700);
  }
  endGame() {
    let dashbord = [...this.state.dashbord];
    let score = this.state.score;
    dashbord.push(score);
    this.setState({ isPlaying: false, dashbord, score: 0 });
    setTimeout(() => {
      this.setState({ currentBox: 0 });
    }, 500);
  }
  plusScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    const { board, currentBox, timeleft, dashbord, score } = this.state;

    return (
      <div className="main">
        <div className="heading">
          <div className="time">
            <h2 className="text">Время: {timeleft}</h2>
          </div>
          <div className="dashbord">
            <h2 className="text">Счет: {score}</h2>
          </div>
        </div>
        <div className="game">
          <div className="wrapper">
            {board.map((i, index) => (
              <Cell
                key={i}
                index={index}
                box={i}
                currentBox={currentBox}
                plusScore={this.plusScore}
              />
            ))}
          </div>
          {this.state.dashbord && (
            <div className="dashbord">
              {dashbord.map((item, index) => (
                <p className="score" key={index}>{`Счёт ${
                  index + 1
                } игры : ${item}`}</p>
              ))}
            </div>
          )}
        </div>

        {!this.state.isPlaying && (
          <button className="button" onClick={this.startGame}>
            Играть
          </button>
        )}
      </div>
    );
  }
}
export default Board;
