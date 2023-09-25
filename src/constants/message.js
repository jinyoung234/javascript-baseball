const { GAME_TERMS } = require('./gameTerms');

const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.\n',
});

const INPUT_MESSAGE = Object.freeze({
  USER_BALLS: '숫자를 입력해주세요 : ',
  EXIT_COMMANDS: `게임을 새로 시작하려면 ${GAME_TERMS.USER_COMMANDS.RESTART}, 종료하려면 ${GAME_TERMS.USER_COMMANDS.EXIT}을 입력하세요.\n`,
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY_BALLS: '아무것도 입력하지 않았으므로 다시 입력해주세요.',
  EXIST_SPACE: '입력한 숫자에 공백이 존재합니다.',
  AVAILABLE_NUMBER: '숫자만 입력이 가능합니다',
  AVAILABLE_DIGIT: `숫자는 ${GAME_TERMS.BALL.DIGIT}자리만 가능합니다.`,
  INVALID_RANGE: `입력한 숫자는 ${GAME_TERMS.BALL.MIN_VALUE}~${GAME_TERMS.BALL.MAX_VALUE}의 범위를 가져야 합니다.`,
  EXIST_DUPLICATE_VALUE: '입력한 숫자에 중복된 값이 존재합니다.',
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
