const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  static print(query) {
    Console.print(query);
  }
}

module.exports = OutputView;
