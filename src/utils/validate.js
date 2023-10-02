const { GAME_TERMS } = require('../constants/gameTerms');
const { SYMBOLS } = require('../constants/symbols');

/**
 * 입력 값이 빈 값인지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값이 빈 값인지의 여부에 대한 boolean
 */
const isEmptyInputValue = (value) => value === SYMBOLS.EMPTY_STRING;

/**
 * 입력 값에 공백이 있는지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값에 공백이 있는지의 여부에 대한 boolean
 */
const isExistSpace = (value) => value.includes(SYMBOLS.SPACE);

/**
 * 입력 값이 숫자인지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값이 숫자인지의 여부에 대한 boolean
 */
const isTypeOfNumber = (value) => /^\d+$/.test(value);

/**
 * 입력 값의 자릿수가 유효한지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값의 자릿수가 유효한지의 여부에 대한 boolean
 */
const isValidDigit = (value) => value.length === GAME_TERMS.BALL.DIGIT;

/**
 * 입력 값의 숫자 범위가 유효한지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값의 숫자 범위가 유효한지의 여부에 대한 boolean
 */
const isValidNumberRange = (value) =>
  value
    .split(SYMBOLS.EMPTY_STRING)
    .every(
      (digit) =>
        digit >= GAME_TERMS.BALL.MIN_VALUE &&
        digit <= GAME_TERMS.BALL.MAX_VALUE,
    );

/**
 * 입력 값에 중복된 숫자가 있는지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 입력 값에 중복된 숫자가 있는지의 여부에 대한 boolean
 */
const isDuplicateNumbers = (value) =>
  new Set(value.split(SYMBOLS.EMPTY_STRING)).size < GAME_TERMS.BALL.DIGIT;

/**
 * 유저 명령이 유효한지 확인하는 메서드
 * @param {string} value - 입력 값
 * @returns {boolean} 유저 명령이 유효한지의 여부에 대한 boolean
 */
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
