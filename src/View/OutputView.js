const MissionUtils = require("@woowacourse/mission-utils");

class OutputView {
  static print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = OutputView;
