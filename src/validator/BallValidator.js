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

const BallValidator = {
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
