const { GAME } = require('./constants/message');
const OutputView = require('./view/OutputView');

class GameController {
  /* eslint-disable class-methods-use-this */
  run() {
    OutputView.print(GAME.RUN);
  }
}

module.exports = GameController;
