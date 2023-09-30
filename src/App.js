const { Console } = require('@woowacourse/mission-utils');
const { SYMBOLS } = require('./constants/symbols');
const { GAME_TERMS } = require('./constants/gameTerms');
const { runGenerator } = require('./utils/runGenerator');
const { OutputView, InputView } = require('./views');
const BaseBallGameService = require('./services/BaseBallGameService');
const { BallValidator, UserCommandValidator } = require('./validator');

class App {
  #outputView;

  #inputView;

  #baseballGameService;

  constructor() {
    this.#init();
  }

  #init() {
    this.#outputView = OutputView;
    this.#inputView = InputView;
    this.#baseballGameService = new BaseBallGameService();
  }

  #handleError(error) {
    this.#outputView.print(error.message);
    Console.close();
  }

  #printExitGame() {
    this.#outputView.printExitGame();
  }

  #printStartGame() {
    this.#outputView.printStartGame();
  }

  #printGameResult(result) {
    this.#outputView.printGameResult(result);
  }

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

  #getComparisonResult(userBall) {
    return this.#baseballGameService.calculateComparisonResult(userBall);
  }

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

  *#processUserCommand() {
    const userCommand = yield* this.#inputUserCommand();
    if (userCommand === GAME_TERMS.USER_COMMANDS.RESTART) {
      this.#init();
      yield* this.#run();
    }
    Console.close();
  }

  *#run() {
    yield* this.#processGame();
    yield* this.#processUserCommand();
  }

  play() {
    runGenerator(this.#run.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
