const { ERROR_MESSAGE } = require('../../src/constants/message');
const { BallError } = require('../../src/errors');
const { BallValidator } = require('../../src/validator');

describe('BallValidator test', () => {
  test.each([
    { input: '', output: new BallError(ERROR_MESSAGE.EMPTY_VALUES) },
    { input: '123 ', output: new BallError(ERROR_MESSAGE.EXIST_SPACE) },
    { input: '12a3', output: new BallError(ERROR_MESSAGE.AVAILABLE_NUMBER) },
    { input: '12345', output: new BallError(ERROR_MESSAGE.AVAILABLE_DIGIT) },
    { input: '304', output: new BallError(ERROR_MESSAGE.INVALID_RANGE) },
    {
      input: '122',
      output: new BallError(ERROR_MESSAGE.EXIST_DUPLICATE_VALUE),
    },
  ])(
    '유저가 입력한 공이 $input 일 때, $output.message의 에러가 발생한다.',
    ({ input, output }) => {
      // given - when
      const executeBallValidation = () => BallValidator.validateBall(input);
      // then
      expect(() => executeBallValidation()).toThrow(output);
    },
  );
});
