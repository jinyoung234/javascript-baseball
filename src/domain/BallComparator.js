const { GAME_TERMS } = require('../constants/gameTerms');
const BallMaker = require('./BallMaker');

class BallComparator {
  #computerBall;

  constructor() {
    this.#init();
  }

  #init() {
    this.#computerBall = BallMaker.of(
      GAME_TERMS.BALL.MIN_VALUE,
      GAME_TERMS.BALL.MAX_VALUE,
    ).createBall();
  }

  #calculateComparisonResult(userBall) {
    return this.#computerBall.reduce(
      ({ strike, ball }, computerDigit, digit) => {
        const userDigit = userBall[digit];
        if (userDigit === computerDigit) return { strike: strike + 1, ball };
        if (this.#computerBall.includes(userDigit))
          return { strike, ball: ball + 1 };
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
