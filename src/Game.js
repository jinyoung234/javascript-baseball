const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./View/OutputView");
const Computer = require("./Computer");
const { genCount, printCompareResult, assignUserNumber } = require("./utils/game");

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
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputValue) => assignUserNumber({ ...param, inputValue }));
 }
 compare() {
  const [ball, strike] = genCount(this.computerNumbers, this.userNumbers);
  const [userSelectNumber, compare, end] = [this.userSelectNumber.bind(this), this.compare.bind(this), this.end.bind(this)];
  printCompareResult({ ball, strike, userSelectNumber, compare, end });
 }
}

module.exports = Game;
