const OutputView = require("./View/OutputView");
const Computer = require("./Computer");
const { genCount, printCompareResult } = require("./utils/game");
const InputView = require("./View/InputView");
const { handleInputValue, assignUserNumber, processValue } = require("./utils/inputView");

class Game {
 constructor() {
  this.computerNumbers = [];
  this.userNumbers = [];
 }

 start() {
  this.computerNumbers = [];
  this.userNumbers = [];
  OutputView.print("숫자 야구 게임을 시작합니다.");
  const computer = new Computer();
  computer.assignNumber();
  this.computerNumbers.push(...computer.numbers);
  this.userSelectNumber(() => this.compare());
 }

 userSelectNumber(callback) {
  const param = { callback, userNumbers: this.userNumbers };
  InputView.input("숫자를 입력해주세요 : ", handleInputValue(param, assignUserNumber));
 }

 compare() {
  const [ball, strike] = genCount(this.computerNumbers, this.userNumbers);
  const [userSelectNumber, compare, end] = [this.userSelectNumber.bind(this), this.compare.bind(this), this.end.bind(this)];
  printCompareResult({ ball, strike, userSelectNumber, compare, end });
 }
 
 end() {
  const param = { start: this.start.bind(this) };
  OutputView.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  InputView.input("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", handleInputValue(param, processValue));
 }
}

module.exports = Game;
