const { GAME_TERMS } = require('../constants/gameTerms');
const { SYMBOLS } = require('../constants/symbols');
const { BallComparator } = require('../domain');

/**
 * App - Domain 간 비즈니스 로직을 처리하는 Service Layer
 */
class BaseBallGameService {
  /**
   * '두 공을 비교'의 역할을 수행하는 Domain 객체
   * @type {BallComparator}
   */
  #ballComparator;

  constructor() {
    this.#ballComparator = new BallComparator();
  }

  /**
   * 유저가 입력한 공을 받아 컴퓨터 공과 비교 후 그 결과를 계산하여 반환하는 메서드
   * @param {number[]} userBall - 유저가 입력한 공
   * @returns {string} - 비교 결과
   */
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
