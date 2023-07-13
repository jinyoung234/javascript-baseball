const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #value;
  constructor() {
    this.#value = [];
  }

  defineValue() {
    while (this.#value.length < 3) {
      this.pickNumber();
    }
  }

  pickNumber() {
    const number = Random.pickNumberInRange(1, 9);
    if (!this.#value.includes(number)) {
      this.#value.push(number);
    }
  }

  getValue() {
    return this.#value;
  }
}

module.exports = Computer;
