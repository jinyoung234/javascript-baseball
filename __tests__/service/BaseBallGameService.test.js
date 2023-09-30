const { GAME_TERMS } = require('../../src/constants/gameTerms');
const { SYMBOLS } = require('../../src/constants/symbols');
const { BallMaker } = require('../../src/domain');
const BaseBallGameService = require('../../src/services/BaseBallGameService');

describe('BallComparator test', () => {
  beforeAll(() => {
    BallMaker.prototype.createBall = () => [3, 4, 5];
  });
  test.each([
    {
      input: {
        userBall: '123',
      },
      output: '1볼',
    },
    {
      input: {
        userBall: '314',
      },
      output: '1볼 1스트라이크',
    },
    {
      input: {
        userBall: '345',
      },
      output: '3스트라이크',
    },
    {
      input: {
        userBall: '926',
      },
      output: `${GAME_TERMS.GAME_RESULTS.NOTHING}`,
    },
  ])(
    '유저가 선택한 번호가 $input.userBall일 때 $output이다.',
    ({ input, output }) => {
      // given
      const userBall = input.userBall.split(SYMBOLS.EMPTY_STRING).map(Number);
      // when
      const compareResult = new BaseBallGameService().calculateComparisonResult(
        userBall,
      );
      // then
      expect(compareResult).toMatch(output);
    },
  );
});
