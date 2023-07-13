class BallComparator {
  #ball;

  #strike;

  constructor() {
    this.#ball = 0;
    this.#strike = 0;
  }

  compare(userValue, computerValue) {
    computerValue.forEach((computerNumber, i) => {
      const userNumber = userValue[i];
      if (computerNumber === userNumber) this.#strike += 1;
      else if (computerValue.includes(userNumber)) this.#ball += 1;
    });
  }

  getResult() {
    return [this.#ball, this.#strike];
  }

  setReset() {
    this.#ball = 0;
    this.#strike = 0;
  }
}

module.exports = BallComparator;
