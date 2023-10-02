const { Console } = require('@woowacourse/mission-utils');
const { SYMBOLS } = require('./constants/symbols');
const { GAME_TERMS } = require('./constants/gameTerms');
const { runGenerator } = require('./utils/runGenerator');
const { OutputView, InputView } = require('./views');
const BaseBallGameService = require('./services/BaseBallGameService');
const { BallValidator, UserCommandValidator } = require('./validator');

class App {
  /**
   * '출력'의 역할을 수행하는 View layer
   *  @type {object}
   */
  #outputView;

  /**
   * '입력'의 역할을 수행하는 View layer
   * @type {object}
   */
  #inputView;

  /**
   * App - Domain 간 비즈니스 로직을 처리하는 Service Layer
   * @type {BaseBallGameService}
   */
  #baseballGameService;

  constructor() {
    this.#init();
  }

  /**
   * '앱 초기화'를 수행하는 메서드
   * @returns {void}
   */
  #init() {
    this.#outputView = OutputView;
    this.#inputView = InputView;
    this.#baseballGameService = new BaseBallGameService();
  }

  /**
   * 에러 객체를 받아 예외를 처리하는 메서드
   * @param {Error} error - 에러 객체
   * @returns {void}
   */
  #handleError(error) {
    this.#outputView.print(error.message);
    Console.close();
  }

  /**
   * '게임 종료' 메시지를 출력하는 메서드
   * @returns {void}
   */
  #printExitGame() {
    this.#outputView.printExitGame();
  }

  /**
   * '게임 시작' 메시지를 출력하는 메서드
   * @returns {void}
   */
  #printStartGame() {
    this.#outputView.printStartGame();
  }

  /**
   * '게임 결과'를 출력하는 메서드
   * @returns {void}
   */
  #printGameResult(result) {
    this.#outputView.printGameResult(result);
  }

  /**
   * 유저의 공을 입력 받은 후 값을 반환하는 메서드
   * @returns {Generator<(resolve: any) => any, any, unknown>} 유저가 입력한 값을 숫자 배열로 변환한 제너레이터 객체
   */
  *#inputUserBall() {
    try {
      const inputUserBall = yield (resolve) =>
        this.#inputView.readUserBalls(resolve);
      BallValidator.validateBall(inputUserBall);
      return inputUserBall.split(SYMBOLS.EMPTY_STRING).map(Number);
    } catch (error) {
      this.#handleError(error);
    }
  }

  /**
   * 게임 명령어를 입력 받은 후 값을 반환하는 메서드
   * @returns {Generator<(resolve: any) => any, number | undefined, unknown>} 유저가 입력한 값을 숫자로 변환한 제너레이터 객체
   */
  *#inputUserCommand() {
    try {
      const inputUserCommand = yield (resolve) =>
        this.#inputView.readExitCommands(resolve);
      UserCommandValidator.validateUserCommand(inputUserCommand);
      return Number(inputUserCommand);
    } catch (error) {
      this.#handleError(error);
    }
  }

  /**
   * service layer에게 유저가 입력한 공을 전달하여 비교 결과를 반환 받는 메서드
   * @param {number[]} userBall - 유저가 입력한 공
   * @returns {string} 비교 결과
   */
  #getComparisonResult(userBall) {
    return this.#baseballGameService.calculateComparisonResult(userBall);
  }

  /**
   * '게임 재 시작'의 역할을 수행하는 메서드
   * @returns {Generator<any, void, any>}
   */
  *#restartGame() {
    this.#init();
    yield* this.#run();
  }

  /**
   * '게임 진행'의 역할을 수행하는 메서드
   * @returns {Generator<any, void, unknown>}
   */
  *#processGame() {
    this.#printStartGame();
    while (true) {
      const userBall = yield* this.#inputUserBall();
      const result = this.#getComparisonResult(userBall);
      this.#printGameResult(result);
      if (result === GAME_TERMS.EXIT_CONDITION) break;
    }
    this.#printExitGame();
  }

  /**
   * '게임 종료 명령어를 처리'의 역할을 수행하는 메서드
   * @returns {Generator<any, void, any>}
   */
  *#processUserCommand() {
    const userCommand = yield* this.#inputUserCommand();
    if (userCommand === GAME_TERMS.USER_COMMANDS.RESTART) {
      yield* this.#restartGame();
    }
    Console.close();
  }

  /**
   * 전체적인 앱 실행에 대한 메서드
   * @returns {Generator<any, void, any>}
   */
  *#run() {
    yield* this.#processGame();
    yield* this.#processUserCommand();
  }

  /**
   * 게임 시작 메서드
   * @returns {void}
   */
  play() {
    runGenerator(this.#run.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
