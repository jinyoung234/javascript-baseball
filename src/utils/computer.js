const MissionUtils = require("@woowacourse/mission-utils");

const processNumber = (numbers, number) => {
 const isDuplicate = numbers.includes(number);
 if (!isDuplicate) {
  numbers.push(number);
 }
};

const genComputerNumbers = (numbers) => {
 while (numbers.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  processNumber(numbers, number);
 }
};

module.exports = genComputerNumbers;
