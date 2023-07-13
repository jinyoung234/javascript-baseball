const { GAME } = require('./constants/message');
const BallComparator = require('./domain/BallComparator');
const Computer = require('./domain/Computer');
const User = require('./domain/User');
const Validator = require('./validator');
const OutputView = require('./view/OutputView');

class GameController {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.comparator = new BallComparator();
  }

  *run() {
    OutputView.print(GAME.RUN);
    this.computer.defineValue();
    while (true) {
      this.comparator.setReset();
      const userValue = yield User.userSelectValue;
      const parseUserValue = GameController.parseValue(userValue);
      this.user.setValue(parseUserValue);
      Validator.validateNumber(parseUserValue);
      this.comparator.compare(this.computer.getValue(), this.user.getValue());
      const [ball, strike] = this.comparator.getResult();
      const isSuccess = GameController.result(ball, strike);
      if (isSuccess) {
        GameController.end();
        break;
      }
      console.log(this.user.getValue(), this.computer.getValue());
    }
  }

  static parseValue(value) {
    return String(value).split('').map(Number);
  }

  static result(ball, strike) {
    const result =
      [
        [ball, GAME.RESULT.BALL],
        [strike, GAME.RESULT.STRIKE],
      ]
        .filter(([count]) => count > 0)
        .map(([count, suffix]) => `${count}${suffix}`)
        .join(' ') || GAME.RESULT.NOTHING;

    OutputView.print(result);
    if (strike !== 3) {
      return false;
    }
    return true;
  }
}

module.exports = GameController;
