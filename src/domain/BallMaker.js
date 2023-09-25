const { Random } = require('@woowacourse/mission-utils');
const { GAME_TERMS } = require('../constants/gameTerms');

class BallMaker {
  #minValue;

  #maxValue;

  constructor(minValue, maxValue) {
    this.#minValue = minValue;
    this.#maxValue = maxValue;
  }

  static of(minValue, maxValue) {
    return new BallMaker(minValue, maxValue);
  }

  createBall() {
    const ballDigits = [];
    while (ballDigits.length < GAME_TERMS.BALL.DIGIT) {
      const number = Random.pickNumberInRange(this.#minValue, this.#maxValue);
      if (!ballDigits.includes(number)) {
        ballDigits.push(number);
      }
    }
    return ballDigits;
  }
}

module.exports = BallMaker;
