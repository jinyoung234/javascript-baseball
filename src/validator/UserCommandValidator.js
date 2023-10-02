const { ERROR_MESSAGE } = require('../constants/message');
const AppError = require('../errors/AppError');
const {
  isEmptyInputValue,
  isExistSpace,
  isValidUserCommand,
} = require('../utils/validate');

/**
 * 유저 명령어의 유효성을 검증하는 객체
 * @typedef {Object} UserCommandValidator
 * @property {function} validateUserCommand - 입력된 유저 명령어를 검증하는 메서드
 */
const UserCommandValidator = {
  /**
   * 입력된 유저 명령어의 유효성을 검증하는 메서드
   * @param {string} userCommand - 사용자로부터 입력받은 유저 명령어
   * @throws {AppError} 입력된 유저 명령어가 유효하지 않을 경우 발생하는 에러
   */
  validateUserCommand(userCommand) {
    if (isEmptyInputValue(userCommand))
      throw new AppError(ERROR_MESSAGE.EMPTY_VALUES);
    if (isExistSpace(userCommand))
      throw new AppError(ERROR_MESSAGE.EXIST_SPACE);
    if (!isValidUserCommand(userCommand))
      throw new AppError(ERROR_MESSAGE.INVALID_USER_COMMAND);
  },
};

module.exports = UserCommandValidator;
