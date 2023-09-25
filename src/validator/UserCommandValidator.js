const { ERROR_MESSAGE } = require('../constants/message');
const AppError = require('../errors/AppError');
const {
  isEmptyInputValue,
  isExistSpace,
  isValidUserCommand,
} = require('../utils/validate');

const UserCommandValidator = {
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
