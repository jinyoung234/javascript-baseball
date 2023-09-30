const { GAME_TERMS } = require('../../src/constants/gameTerms');
const { SYMBOLS } = require('../../src/constants/symbols');
const { BallMaker } = require('../../src/domain');
const { isValidNumberRange } = require('../../src/utils/validate');

describe('BallMaker Test', () => {
  const createBall = () =>
    BallMaker.of(
      GAME_TERMS.BALL.MIN_VALUE,
      GAME_TERMS.BALL.MAX_VALUE,
    ).createBall();
  test('BallMaker가 생성하는 공은 3자리의 숫자를 가진다.', () => {
    // given - when
    const balls = createBall();
    // then
    expect(balls).toHaveLength(GAME_TERMS.BALL.DIGIT);
  });
  test(`BallMaker가 생성하는 공은 ${GAME_TERMS.BALL.MIN_VALUE} ~ ${GAME_TERMS.BALL.MAX_VALUE}의 범위를 가진다.`, () => {
    // given - when
    const balls = createBall().join(SYMBOLS.EMPTY_STRING);
    // then
    expect(isValidNumberRange(balls)).toBeTruthy();
  });
});
