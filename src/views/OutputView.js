const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printStartGame() {
    this.print(OUTPUT_MESSAGE.GAME_START);
  },
  printGameResult(result) {
    this.print(result);
  },
  printExitGame() {
    this.print(OUTPUT_MESSAGE.GAME_EXIT);
  },
};

module.exports = OutputView;
