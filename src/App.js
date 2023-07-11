const OutputView = require("./View/OutputView");

class App {
  play() {
    OutputView.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();

app.play();

module.exports = App;
