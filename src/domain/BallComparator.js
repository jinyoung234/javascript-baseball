const { GAME_TERMS } = require('../constants/gameTerms');
const BallMaker = require('./BallMaker');

/**
 * 컴퓨터 공과 유저 공의 비교 결과
 * @typedef {object} ComparisonResult
 * @property {number} strike - 스트라이크 갯수
 * @property {number} ball - 볼 갯수
 */

/**
 * "서로의 공을 비교"의 역할을 수행하는 도메인 객체
 */
class BallComparator {
  /**
   * BallMaker가 생성한 공
   * @type {number[]}
   */
  #computerBall;

  constructor() {
    this.#init();
  }

  /**
   * 매개변수가 없는 정적 팩토리 메서드
   * @returns {BallComparator} BallComparator
   */
  static create() {
    return new BallComparator();
  }

  /**
   * '초기화'의 역할을 수행하는 메서드
   * @returns {void}
   */
  #init() {
    this.#computerBall = BallMaker.of(
      GAME_TERMS.BALL.MIN_VALUE,
      GAME_TERMS.BALL.MAX_VALUE,
    ).createBall();
  }

  /**
   * 유저 공과 컴퓨터 공의 특정 자릿수가 일치하는지 확인하는 메서드
   * @param {number[]} userBall - 유저가 생성한 공
   * @param {number} digit - 공의 자릿수(인덱스)
   * @returns {boolean} '스트라이크 여부'에 대한 boolean
   */
  #isStrike(userBall, digit) {
    return userBall[digit] === this.#computerBall[digit];
  }

  /**
   * 컴퓨터 공에 유저 공의 특정 자릿수가 포함되어 있는지 확인하는 메서드
   * @param {number[]} userBall - 유저가 생성한 공
   * @param {number} digit - 공의 자릿수(인덱스)
   * @returns {boolean} '볼 여부'에 대한 boolean
   */
  #isBall(userBall, digit) {
    return this.#computerBall.includes(userBall[digit]);
  }

  /**
   * 유저 공과 컴퓨터 공을 비교 후 비교 결과를 반환하는 메서드
   * @param {number[]} userBall - 유저 공
   * @returns {ComparisonResult} - 비교 결과
   */
  compareBalls(userBall) {
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
}

module.exports = BallComparator;
