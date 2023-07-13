const { GAME } = require('./constants/message');
const Computer = require('./domain/Computer');
const User = require('./domain/User');
const Validator = require('./validator');
const OutputView = require('./view/OutputView');

class GameController {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  *run() {
    OutputView.print(GAME.RUN);
    this.computer.defineValue();
    const userValue = yield User.userSelectValue;
    const parseUserValue = GameController.parseValue(userValue);
    this.user.setValue(parseUserValue);
    Validator.validateNumber(parseUserValue);
  }

  static parseValue(value) {
    return String(value).split('').map(Number);
  }
}

module.exports = GameController;
