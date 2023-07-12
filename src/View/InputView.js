const { Console } = require("@woowacourse/mission-utils");

class InputView {
 static input(query, callback) {
  Console.readLine(query, callback);
 }
}

module.exports = InputView;
