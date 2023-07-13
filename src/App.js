const GameController = require('./GameController');

class App {
  constructor() {
    this.controller = new GameController();
  }

  /* eslint-disable class-methods-use-this */
  play() {
    this.controller.run();
  }
}

module.exports = App;
