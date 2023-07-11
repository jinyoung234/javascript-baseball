const Computer = require("./Computer");
const OutputView = require("./View/OutputView");

class App {
  #computer;
  constructor() {
    this.#computer = new Computer();
  }
  play() {
    OutputView.print("숫자 야구 게임을 시작합니다.");
    this.#computer.selectThreeNumber();
  }
}

const app = new App();

app.play();

module.exports = App;
