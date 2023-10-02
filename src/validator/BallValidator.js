const { ERROR_MESSAGE } = require('../constants/message');
const { BallError } = require('../errors');
const {
  isEmptyInputValue,
  isExistSpace,
  isTypeOfNumber,
  isValidDigit,
  isValidNumberRange,
  isDuplicateNumbers,
} = require('../utils/validate');

/**
 * 볼 유효성 검증을 수행하는 객체
 * @typedef {Object} BallValidator
 * @property {(ball : string) : void} validateBall - 입력된 볼을 검증하는 메서드
 */
const BallValidator = {
  /**
   * 입력된 볼의 유효성을 검증하는 메서드
   * @param {string} ball - 사용자로부터 입력받은 볼
   * @throws {BallError} 입력된 볼이 유효하지 않을 경우 발생하는 에러
   */
  validateBall(ball) {
    if (isEmptyInputValue(ball))
      throw new BallError(ERROR_MESSAGE.EMPTY_VALUES);
    if (isExistSpace(ball)) throw new BallError(ERROR_MESSAGE.EXIST_SPACE);
    if (!isTypeOfNumber(ball))
      throw new BallError(ERROR_MESSAGE.AVAILABLE_NUMBER);
    if (!isValidDigit(ball)) throw new BallError(ERROR_MESSAGE.AVAILABLE_DIGIT);
    if (!isValidNumberRange(ball))
      throw new BallError(ERROR_MESSAGE.INVALID_RANGE);
    if (isDuplicateNumbers(ball))
      throw new BallError(ERROR_MESSAGE.EXIST_DUPLICATE_VALUE);
  },
};

module.exports = BallValidator;
