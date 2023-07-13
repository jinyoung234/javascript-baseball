const { USER } = require('../constants/message');
const InputView = require('../view/InputView');

class User {
  #userValue;

  constructor() {
    this.#userValue = [];
  }

  static userSelectValue(callback) {
    InputView.input(USER.INPUT, (inputValue) => {
      callback(inputValue);
    });
  }

  getValue() {
    return this.#userValue;
  }

  setValue(value) {
    this.#userValue = value;
  }
}

module.exports = User;
