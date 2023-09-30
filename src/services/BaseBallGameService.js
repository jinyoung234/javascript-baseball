const { GAME_TERMS } = require('../constants/gameTerms');
const { SYMBOLS } = require('../constants/symbols');
const { BallComparator } = require('../domain');

class BaseBallGameService {
  #ballComparator;

  constructor() {
    this.#ballComparator = new BallComparator();
  }

  calculateComparisonResult(userBall) {
    const { strike, ball } = this.#ballComparator.compareBalls(userBall);
    return (
      [
        [ball, GAME_TERMS.GAME_RESULTS.BALL],
        [strike, GAME_TERMS.GAME_RESULTS.STRIKE],
      ]
        .filter(([count]) => count > 0)
        .map(([count, suffix]) => `${count}${suffix}`)
        .join(SYMBOLS.SPACE) || GAME_TERMS.GAME_RESULTS.NOTHING
    );
  }
}

module.exports = BaseBallGameService;
