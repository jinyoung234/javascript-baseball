const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/message');

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printStartGame() {
    this.print(OUTPUT_MESSAGE.GAME_START);
  },

  printExitGame() {
    this.print(OUTPUT_MESSAGE.GAME_EXIT);
  },
};

module.exports = OutputView;
