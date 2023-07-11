const MissionUtils = require("@woowacourse/mission-utils");
const validatedValue = require("../utils/validation");

class InputView {
  static inputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputValue) => {
      validatedValue(inputValue);
    });
  }
}

module.exports = InputView;
