const { SYMBOLS } = require('../../src/constants/symbols');
const { BallMaker, BallComparator } = require('../../src/domain');

describe('BallComparator test', () => {
  beforeAll(() => {
    BallMaker.prototype.createBall = () => [3, 4, 5];
  });
  test.each([
    {
      input: {
        userBall: '123',
      },
      output: {
        strike: 0,
        ball: 1,
      },
    },
    {
      input: {
        userBall: '314',
      },
      output: {
        strike: 1,
        ball: 1,
      },
    },
    {
      input: {
        userBall: '345',
      },
      output: {
        strike: 3,
        ball: 0,
      },
    },
  ])(
    '유저가 선택한 번호가 $input.userBall일 때 비교 결과는 $output.strike스트라이크 $output.ball볼 이다.',
    ({ input, output }) => {
      // given
      const userBall = input.userBall.split(SYMBOLS.EMPTY_STRING).map(Number);
      // when
      const compareResult = BallComparator.create().compareBalls(userBall);
      // then
      expect(compareResult).toStrictEqual(output);
    },
  );
});
