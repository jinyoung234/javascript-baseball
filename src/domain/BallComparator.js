const { GAME_TERMS } = require('../constants/gameTerms');
const BallMaker = require('./BallMaker');

class BallComparator {
  #computerBall;

  constructor() {
    this.#init();
  }

  static create() {
    return new BallComparator();
  }

  #init() {
    this.#computerBall = BallMaker.of(
      GAME_TERMS.BALL.MIN_VALUE,
      GAME_TERMS.BALL.MAX_VALUE,
    ).createBall();
  }

  #isStrike(userBall, digit) {
    return userBall[digit] === this.#computerBall[digit];
  }

  #isBall(userBall, digit) {
    return this.#computerBall.includes(userBall[digit]);
  }

  #calculateComparisonResult(userBall) {
    return this.#computerBall.reduce(
      ({ strike, ball }, _, digit) => {
        if (this.#isStrike(userBall, digit))
          return { strike: strike + 1, ball };
        if (this.#isBall(userBall, digit)) return { strike, ball: ball + 1 };
        return { strike, ball };
      },
      { strike: 0, ball: 0 },
    );
  }

  compareBalls(userBall) {
    return this.#calculateComparisonResult(userBall);
  }
}

module.exports = BallComparator;
