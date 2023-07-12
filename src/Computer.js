const genComputerNumbers = require("./utils/computer");

class Computer {
 constructor() {
  this.numbers = [];
 }
 assignNumber() {
  genComputerNumbers(this.numbers);
 }
}

module.exports = Computer;
