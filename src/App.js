const { Console } = require('@woowacourse/mission-utils');
const BaseBallGameService = require('./services/BaseBallGameService');
const { runGenerator } = require('./utils/runGenerator');
const BallValidator = require('./validator/BallValidator');
const { OutputView, InputView } = require('./views');

class App {
  #outputView;

  #inputView;

  #baseballGameService;

  constructor() {
    this.#outputView = OutputView;
    this.#inputView = InputView;
    this.#baseballGameService = new BaseBallGameService();
  }

  #printStartGame() {
    this.#outputView.printStartGame();
  }

  *#inputUserBall() {
    try {
      const inputUserBall = yield (resolve) =>
        this.#inputView.readUserBalls(resolve);
      BallValidator.validateBall(inputUserBall);
      return inputUserBall;
    } catch (error) {
      this.#outputView.print(error.message);
      Console.close();
    }
  }

  *#getUserBall() {
    return yield* this.#inputUserBall();
  }

  *#run() {
    this.#printStartGame();
    const userBall = yield* this.#getUserBall();
    yield console.log(userBall);
  }

  play() {
    runGenerator(this.#run.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
