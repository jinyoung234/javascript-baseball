const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/message');

const InputView = {
  read(query, callback) {
    Console.readLine(query, (text) => callback(text));
  },

  readUserBalls(callback) {
    this.read(INPUT_MESSAGE.USER_BALLS, (text) => {
      callback(text);
    });
  },

  readExitCommands(callback) {
    this.read(INPUT_MESSAGE.EXIT_COMMANDS, (text) => {
      callback(text);
    });
  },
};

module.exports = InputView;
