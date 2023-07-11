const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this.numbers = [];
  }
  selectThreeNumber() {
    while (this.numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      const isDuplicate = this.numbers.includes(number);
      if (!isDuplicate) {
        this.numbers.push(number);
      }
    }
  }
}

module.exports = Computer;
