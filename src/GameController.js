const { GAME } = require('./constants/message');
const Computer = require('./domain/Computer');
const OutputView = require('./view/OutputView');

class GameController {
  constructor() {
    this.computer = new Computer();
  }

  run() {
    OutputView.print(GAME.RUN);
    this.computer.defineValue();
  }
}

module.exports = GameController;
