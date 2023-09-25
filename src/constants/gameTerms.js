const GAME_TERMS = Object.freeze({
  USER_COMMANDS: Object.freeze({
    EXIT: 2,
    RESTART: 1,
  }),
  BALL: Object.freeze({
    MIN_VALUE: 1,
    MAX_VALUE: 9,
    DIGIT: 3,
  }),
  GAME_RESULTS: Object.freeze({
    STRIKE: '스트라이크',
    BALL: '볼',
    NOTHING: '낫싱',
  }),
  EXIT_CONDITION: '3스트라이크',
});

module.exports = { GAME_TERMS };
