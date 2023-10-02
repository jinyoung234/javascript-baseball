const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/message');

/**
 * '출력'의 역할을 수행하는 View Layer
 */
const OutputView = {
  /**
   * 메시지를 출력하는 메서드
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  /**
   * '게임 시작' 메시지를 출력하는 메서드
   */
  printStartGame() {
    this.print(OUTPUT_MESSAGE.GAME_START);
  },

  /**
   * 게임 결과를 출력하는 메서드
   * @param {string} result - 출력할 게임 결과
   */
  printGameResult(result) {
    this.print(result);
  },

  /**
   * '게임 종료' 메시지를 출력하는 메서드
   */
  printExitGame() {
    this.print(OUTPUT_MESSAGE.GAME_EXIT);
  },
};

module.exports = OutputView;
