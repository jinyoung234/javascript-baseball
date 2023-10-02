const { ERROR_MESSAGE } = require('../../src/constants/message');
const AppError = require('../../src/errors/AppError');
const { UserCommandValidator } = require('../../src/validator');

describe('UserCommandValidator Test', () => {
  test.each([
    { input: '', output: new AppError(ERROR_MESSAGE.EMPTY_VALUES) },
    { input: '1 ', output: new AppError(ERROR_MESSAGE.EXIST_SPACE) },
    { input: '1a', output: new AppError(ERROR_MESSAGE.INVALID_USER_COMMAND) },
  ])(
    '유저가 입력한 공이 $input 일 때, $output.message의 에러가 발생한다.',
    ({ input, output }) => {
      // given - when
      const executeUserCommandValidation = () =>
        UserCommandValidator.validateUserCommand(input);
      // then
      expect(() => executeUserCommandValidation()).toThrow(output);
    },
  );
});
