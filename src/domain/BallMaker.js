const { Random } = require('@woowacourse/mission-utils');
const { GAME_TERMS } = require('../constants/gameTerms');

/**
 * "공 생성"의 역할을 수행하는 도메인 객체
 */
class BallMaker {
  /**
   * 공의 최소 값
   * @type {number}
   */
  #minValue;

  /**
   * 공의 최댓 값
   * @type {number}
   */
  #maxValue;

  constructor(minValue, maxValue) {
    this.#minValue = minValue;
    this.#maxValue = maxValue;
  }

  /**
   * 매개변수가 2개 이상인 정적 팩토리 메서드
   * @param {number} minValue
   * @param {number} maxValue
   * @returns {BallMaker} BallMaker 인스턴스
   */
  static of(minValue, maxValue) {
    return new BallMaker(minValue, maxValue);
  }

  /**
   * "공 생성"의 역할을 수행하는 메서드
   * @returns {number[]} 생성한 공
   */
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
