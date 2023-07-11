const Computer = require("./Computer");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {
  #computer;
  constructor() {
    this.#computer = new Computer();
  }
  play() {
    OutputView.print("숫자 야구 게임을 시작합니다.");
    this.#computer.selectThreeNumber();
    InputView.inputNumber();
  }
}

const app = new App();

app.play();

module.exports = App;
