const { Console } = require('@woowacourse/mission-utils');
const BaseBallGameService = require('./services/BaseBallGameService');
const { runGenerator } = require('./utils/runGenerator');
const BallValidator = require('./validator/BallValidator');
const { OutputView, InputView } = require('./views');
const { SYMBOLS } = require('./constants/symbols');
const { GAME_TERMS } = require('./constants/gameTerms');

class App {
  #outputView;

  #inputView;

  #baseballGameService;

  constructor() {
    this.#outputView = OutputView;
    this.#inputView = InputView;
    this.#baseballGameService = new BaseBallGameService();
  }

  #printExitGame() {
    this.#outputView.printExitGame();
  }

  #printStartGame() {
    this.#outputView.printStartGame();
  }

  #printGameResult(result) {
    this.#outputView.print(result);
  }

  *#inputUserBall() {
    try {
      const inputUserBall = yield (resolve) =>
        this.#inputView.readUserBalls(resolve);
      BallValidator.validateBall(inputUserBall);
      return inputUserBall.split(SYMBOLS.EMPTY_STRING).map(Number);
    } catch (error) {
      this.#outputView.print(error.message);
      Console.close();
    }
  }

  *#getUserBall() {
    return yield* this.#inputUserBall();
  }

  #getComparisonResult(userBall) {
    return this.#baseballGameService.calculateComparisonResult(userBall);
  }

  *#startGame() {
    while (true) {
      const userBall = yield* this.#getUserBall();
      const result = this.#getComparisonResult(userBall);
      this.#printGameResult(result);
      if (result === GAME_TERMS.EXIT_CONDITION) break;
    }
  }

  *#run() {
    this.#printStartGame();
    yield* this.#startGame();
    this.#printExitGame();
  }

  play() {
    runGenerator(this.#run.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
