const OutputView = require("../View/OutputView");
const validatedValue = require("../utils/validation");

const isStrike = (computerNumber, userNumber) => {
 if (computerNumber === userNumber) {
  return true;
 }
 return false;
};

const isBall = (computerNumbers, userNumber) => {
 if (computerNumbers.includes(userNumber)) {
  return true;
 }
 return false;
};

const genCount = (computerNumbers, userNumbers) => {
 let [ball, strike] = [0, 0];
 computerNumbers.forEach((computerNumber, i) => {
  const userNumber = userNumbers[i];
  if (isStrike(computerNumber, userNumber)) strike++;
  else if (isBall(computerNumbers, userNumber)) ball++;
 });
 return [ball, strike];
};

const printCompareResult = ({ ball, strike, userSelectNumber, compare, end }) => {
 if (ball === 0 && strike === 0) {
  OutputView.print("낫싱");
  userSelectNumber(() => compare());
  return;
 }
 if (ball > 0 && strike === 0) {
  OutputView.print(`${ball}볼`);
  userSelectNumber(() => compare());
  return;
 }
 if (ball === 0 && strike > 0 && strike < 3) {
  OutputView.print(`${strike}스트라이크`);
  userSelectNumber(() => compare());
  return;
 }
 if (ball > 0 && strike > 0) {
  OutputView.print(`${ball}볼 ${strike}스트라이크`);
  userSelectNumber(() => compare());
  return;
 }
};

const assignUserNumber = ({ inputValue, userNumbers, callback }) => {
 validatedValue(inputValue);
 userNumbers.splice(0, 3, ...inputValue.split("").map(Number));
 callback();
};

module.exports = { genCount, printCompareResult, assignUserNumber };
