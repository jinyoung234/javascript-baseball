const { GAME_TERMS } = require('../constants/gameTerms');
const { SYMBOLS } = require('../constants/symbols');

const isEmptyInputValue = (value) => value === SYMBOLS.EMPTY_STRING;

const isExistSpace = (value) => value.includes(SYMBOLS.SPACE);

const isTypeOfNumber = (value) => /^\d+$/.test(value);

const isValidDigit = (value) => value.length === GAME_TERMS.BALL.DIGIT;

const isValidNumberRange = (value) =>
  value
    .split(SYMBOLS.EMPTY_STRING)
    .every(
      (digit) =>
        digit >= GAME_TERMS.BALL.MIN_VALUE &&
        digit <= GAME_TERMS.BALL.MAX_VALUE,
    );

const isDuplicateNumbers = (value) =>
  new Set(value.split(SYMBOLS.EMPTY_STRING)).size < GAME_TERMS.BALL.DIGIT;

const isValidUserCommand = (value) =>
  Number(value) === GAME_TERMS.USER_COMMANDS.RESTART ||
  Number(value) === GAME_TERMS.USER_COMMANDS.EXIT;

module.exports = {
  isEmptyInputValue,
  isExistSpace,
  isTypeOfNumber,
  isValidDigit,
  isValidNumberRange,
  isDuplicateNumbers,
  isValidUserCommand,
};
